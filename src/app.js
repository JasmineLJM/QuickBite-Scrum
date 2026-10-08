const STORAGE_KEY = 'quickbite_orders_v2';
const PAUSE_KEY = 'quickbite_pause_until_v1';
const MINUTE = 60000;
const PAUSE_DURATION = 15000;
const LAST_ORDER_KEY = 'quickbite_last_order_v2';
const STATUS_FLOW = {
  RECEIVED: { text: 'Received', className: 'badge-submitted', nextText: 'Start Preparing', nextStatus: 'PREPARING' },
  PREPARING: { text: 'Preparing', className: 'badge-in_progress', nextText: 'Mark Ready for Pickup', nextStatus: 'READY_FOR_PICKUP' },
  READY_FOR_PICKUP: { text: 'Ready for Pickup', className: 'badge-ready_for_pickup', nextText: 'Confirm Collected', nextStatus: 'COMPLETED' },
  COMPLETED: { text: 'Completed', className: 'badge-completed' }
};
let selectedRestaurantId = RESTAURANTS[0].id;
let quantities = {};
const el = id => document.getElementById(id);
const money = amount => amount.toFixed(2);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
function restaurant() { return RESTAURANTS.find(r => r.id === selectedRestaurantId); }
function loadOrders() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  render();
}
function selectedItems() {
  return restaurant().items.filter(item => quantities[item.id] > 0)
    .map(item => ({ id: item.id, name: item.name, price: item.price, quantity: quantities[item.id] }));
}
function loadPauses() {
  try { return JSON.parse(localStorage.getItem(PAUSE_KEY) || '{}') || {}; }
  catch { return {}; }
}
function pauseRemaining(restaurantId, now = Date.now()) {
  return Math.max(0, (Number(loadPauses()[restaurantId]) || 0) - now);
}
function pauseRestaurant(restaurantId) {
  if (!RESTAURANTS.some(r => r.id === restaurantId)) return;
  const pauses = loadPauses();
  pauses[restaurantId] = Math.max(Date.now(), Number(pauses[restaurantId]) || 0) + PAUSE_DURATION;
  localStorage.setItem(PAUSE_KEY, JSON.stringify(pauses));
  renderAvailability();
}
function pickupWindow(index, now = Date.now()) {
  const start = now + (15 + index * 30) * MINUTE;
  return { start, end: start + 30 * MINUTE };
}
function formatPickup(start, end) {
  const format = timestamp => new Date(timestamp).toLocaleString([], {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  return `${format(start)} – ${format(end)}`;
}
function renderPickupOptions() {
  const select = el('pickup-time');
  const selected = select.value || '0';
  const now = Date.now();
  select.innerHTML = [0, 1].map(index => {
    const slot = pickupWindow(index, now);
    return `<option value="${index}">${formatPickup(slot.start, slot.end)}</option>`;
  }).join('');
  select.value = selected;
}
function renderAvailability() {
  const remaining = pauseRemaining(selectedRestaurantId);
  el('btn-submit').disabled = remaining > 0;
  el('customer-pause').textContent = remaining > 0
    ? `Ordering paused for ${Math.ceil(remaining / 1000)} seconds. You can still choose items.` : '';
  for (const r of RESTAURANTS) {
    const seconds = Math.ceil(pauseRemaining(r.id) / 1000);
    el(`pause-status-${r.id}`).textContent = seconds > 0
      ? `Ordering paused: ${seconds}s remaining` : 'Accepting orders';
  }
}
function renderMenu() {
  el('menu').innerHTML = restaurant().items.map(item => `
    <div class="product-card">
      <div class="product-title">${escapeHTML(item.name)}</div>
      <div class="product-desc">${escapeHTML(item.description)}</div>
      <div class="product-meta"><div class="price">$${money(item.price)}</div>
        <div class="counter">
          <button class="btn-counter" data-item="${item.id}" data-delta="-1" aria-label="Remove ${escapeHTML(item.name)}">−</button>
          <span>${quantities[item.id] || 0}</span>
          <button class="btn-counter" data-item="${item.id}" data-delta="1" aria-label="Add ${escapeHTML(item.name)}">+</button>
        </div>
      </div>
    </div>`).join('');
  const items = selectedItems();
  el('total-price').textContent = money(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
  renderAvailability();
}
function changeQty(itemId, delta) {
  if (!restaurant().items.some(item => item.id === itemId)) return;
  quantities[itemId] = Math.max(0, (quantities[itemId] || 0) + delta);
  renderMenu();
}
function submitOrder() {
  const now = Date.now();
  if (pauseRemaining(selectedRestaurantId, now) > 0) {
    renderAvailability();
    alert('This restaurant is paused. Please wait before placing your order.');
    return;
  }
  const slotIndex = Number(el('pickup-time').value);
  if (![0, 1].includes(slotIndex)) { alert('Please select a pickup window.'); return; }
  const slot = pickupWindow(slotIndex, now);
  const items = selectedItems();
  if (!items.length) { alert('Please add at least one item.'); return; }
  const customerId = el('customer-id').value.trim();
  if (!customerId) { alert('Please enter a customer ID.'); return; }
  const newOrder = {
    customerId,
    id: 'ORD-' + crypto.randomUUID(), restaurantId: restaurant().id,
    restaurantName: restaurant().name, items,
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    pickupStart: slot.start, pickupEnd: slot.end,
    status: 'RECEIVED', createdAt: new Date(now).toLocaleTimeString(), createdAtTimestamp: now
  };
  const orders = loadOrders();
  orders.unshift(newOrder);
  localStorage.setItem(LAST_ORDER_KEY, newOrder.id);
  saveOrders(orders);
  quantities = {};
  renderMenu();
}
function advanceOrderStatus(orderId, restaurantId) {
  const orders = loadOrders();
  const target = orders.find(order => order.id === orderId);
  if (!target || target.restaurantId !== restaurantId) return;
  const next = STATUS_FLOW[target.status]?.nextStatus;
  if (next) { target.status = next; saveOrders(orders); }
}
function itemSummary(order) { return order.items.map(item => `${item.name} × ${item.quantity}`).join(', '); }
function orderCard(order, kitchen = false) {
  const config = STATUS_FLOW[order.status];
  return `<div class="order-item">
    <div class="restaurant-label">${escapeHTML(order.restaurantName)} · Customer: ${escapeHTML(order.customerId || 'Legacy customer')}</div>
    <div class="order-header"><span>${escapeHTML(order.id)} (${escapeHTML(order.createdAt)})</span>
      <span class="badge ${config.className}">${config.text}</span></div>
    <div class="order-body"><span>${escapeHTML(itemSummary(order))}</span><span>$${money(order.total)}</span></div>
    <p class="pickup-summary">Pickup: ${order.pickupStart && order.pickupEnd ? escapeHTML(formatPickup(order.pickupStart, order.pickupEnd)) : 'Not specified (older order)'}</p>
    ${kitchen && config.nextStatus ? `<button class="btn-action" data-order="${escapeHTML(order.id)}" data-restaurant="${escapeHTML(order.restaurantId)}">${config.nextText} →</button>` : ''}
  </div>`;
}
function render() {
  const orders = loadOrders();
  for (const r of RESTAURANTS) {
    const received = orders.filter(order => order.restaurantId === r.id);
    const activeCount = received.filter(order => order.status !== 'COMPLETED').length;
    el(`count-${r.id}`).textContent = `${received.length} total orders · ${activeCount} active · ${received.length - activeCount} completed`;
    el(`orders-${r.id}`).innerHTML = received.length ? received.map(order => orderCard(order, true)).join('')
      : '<div class="empty-placeholder">No orders received</div>';
  }
  const customerId = el('customer-id').value.trim();
  const mine = orders.filter(order => order.customerId === customerId);
  el('customer-orders').innerHTML = mine.length ? mine.map(order => orderCard(order)).join('')
    : '<div class="empty-placeholder">No orders for this customer</div>';
  const last = mine[0];
  el('customer-order-status').style.display = last ? 'block' : 'none';
  if (last) {
    el('cust-order-id').textContent = last.id;
    el('cust-order-pickup').textContent = last.pickupStart && last.pickupEnd ? formatPickup(last.pickupStart, last.pickupEnd) : 'Not specified (older order)';
    el('cust-order-items').textContent = `${last.restaurantName}: ${itemSummary(last)} ($${money(last.total)})`;
    el('cust-order-badge').className = `badge ${STATUS_FLOW[last.status].className}`;
    el('cust-order-badge').textContent = STATUS_FLOW[last.status].text;
  }
}
function resetAllData() {
  if (!confirm('Are you sure you want to clear all QuickBite order data?')) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LAST_ORDER_KEY);
  quantities = {};
  renderMenu();
  render();
}
window.addEventListener('storage', event => {
  if ([STORAGE_KEY, LAST_ORDER_KEY, PAUSE_KEY, null].includes(event.key)) { render(); renderAvailability(); }
});
window.addEventListener('DOMContentLoaded', () => {
  el('restaurant-select').innerHTML = RESTAURANTS.map(r => `<option value="${r.id}">${escapeHTML(r.name)}</option>`).join('');
  el('restaurant-select').addEventListener('change', event => {
    selectedRestaurantId = event.target.value;
    quantities = {};
    renderMenu();
    render();
  });
  el('menu').addEventListener('click', event => {
    const button = event.target.closest('[data-item]');
    if (button) changeQty(button.dataset.item, Number(button.dataset.delta));
  });
  el('customer-id').addEventListener('input', render);
  el('kitchens').addEventListener('click', event => {
    const pauseButton = event.target.closest('[data-pause]');
    if (pauseButton) { pauseRestaurant(pauseButton.dataset.pause); return; }
    const button = event.target.closest('[data-order]');
    if (button) advanceOrderStatus(button.dataset.order, button.dataset.restaurant);
  });
  renderPickupOptions();
  renderMenu();
  render();
  setInterval(() => { renderAvailability(); renderPickupOptions(); }, 250);
});
