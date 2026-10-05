const content = document.getElementById("content");
const message = document.getElementById("message");
const retry = document.getElementById("retry");

const selectedId = new URLSearchParams(window.location.search)
  .get("restaurant");

function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

if (selectedId !== null) {
  const back = element("a", "← All restaurants", "back-link");
  back.href = "/";
  document.getElementById("eyebrow").before(back);

  document.getElementById("heading").textContent = "Restaurant menu";
  document.getElementById("intro").textContent = "";
  document.getElementById("section-title").textContent = "Menu";
  content.setAttribute("aria-label", "Restaurant menu");
}

async function loadRestaurants() {
  content.replaceChildren();
  retry.hidden = true;
  document.getElementById("count").textContent = "";
  message.textContent = "Loading restaurants...";

  try {
    const response = await fetch("/api/restaurants");

    if (!response.ok) {
      throw new Error("Unable to load restaurants");
    }

    const restaurants = await response.json();

    // Show the selected restaurant's empty menu page.
    if (selectedId !== null) {
      const restaurant = restaurants.find(
        (item) => String(item.id) === selectedId
      );

      if (!restaurant) {
        message.textContent = "This restaurant is not available.";
        return;
      }

      document.title = `${restaurant.name} | QuickBite`;
      document.getElementById("heading").textContent = restaurant.name;
      document.getElementById("eyebrow").textContent =
        restaurant.cuisine.toUpperCase();
      document.getElementById("intro").textContent = restaurant.address;

      message.textContent = "No menu items are available yet.";
      return;
    }

    // Show the participating restaurant list.
    message.textContent = restaurants.length
      ? ""
      : "No participating restaurants are available.";

    document.getElementById("count").textContent =
      `${restaurants.length} restaurants`;

    for (const restaurant of restaurants) {
      const card = element("article", "", "card");
      const link = element("a", "View menu →", "menu-link");

      link.href = `/?restaurant=${encodeURIComponent(restaurant.id)}`;
      link.setAttribute("aria-label", `View menu for ${restaurant.name}`);

      card.append(
        element("span", restaurant.cuisine, "label"),
        element("h3", restaurant.name),
        element("p", restaurant.address),
        link
      );

      content.append(card);
    }
  } catch (error) {
    message.textContent =
      "Could not load restaurants. Please check the server and try again.";
    retry.hidden = false;
  }
}

retry.addEventListener("click", loadRestaurants);
loadRestaurants();