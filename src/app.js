const express = require("express");
const path = require("path");
const restaurants = require("./data/restaurants.json");
const app = express();

// Expose only restaurants currently participating in QuickBite.
app.get("/api/restaurants", (req, res) => {
  const list = restaurants.filter(r => r.participating).map(r => ({
    id: r.id, name: r.name, cuisine: r.cuisine, address: r.address
  }));
  res.json(list);
});

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res) => res.status(404).json({ error: "Page not found." }));
module.exports = app;
