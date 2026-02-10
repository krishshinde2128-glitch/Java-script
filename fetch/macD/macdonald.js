// --- 1. Data Mock ---
const menuData = [
  {
    id: 1,
    name: "Big Mac",
    price: 5.99,
    category: "Burgers",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "Mouthwatering perfection. Two 100% beef patties.",
  },
  {
    id: 2,
    name: "Quarter Pounder",
    price: 6.39,
    category: "Burgers",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_QuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "100% fresh beef, hot, deliciously juicy.",
  },
  {
    id: 3,
    name: "World Famous Fries",
    price: 2.99,
    category: "Sides",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumFrenchFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "Golden on the outside, soft and fluffy on the inside.",
  },
  {
    id: 4,
    name: "Chicken McNuggets",
    price: 4.49,
    category: "Chicken",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_10pcChickenMcNuggets_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "Tender, juicy chicken breast meat in a tempura coating.",
  },
  {
    id: 5,
    name: "Coca-Cola",
    price: 1.99,
    category: "Drinks",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumCoke_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "A cold, refreshing Coca-Cola®️ soda.",
  },
  {
    id: 6,
    name: "Oreo McFlurry",
    price: 3.29,
    category: "Desserts",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/Header_OreoMcFlurry_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    desc: "Creamy vanilla soft serve with crunchy OREO®️ pieces.",
  },
];

// --- 2. State Management ---
let cart = [];
const menuArea = document.getElementById("menu-area");
const cartOverlay = document.getElementById("cart-overlay");
const cartCountEl = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const processingView = document.getElementById("processing-view");
const paymentText = document.getElementById("payment-text");

// --- 3. Async/Await Operations ---

// Show error state in menu area
function showError(message) {
  menuArea.innerHTML = `
        <div class="error-container" style="text-align: center; padding: 3rem;">
            <div class="error-icon" style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="color: #da291c; margin-bottom: 0.5rem;">Oops! Something went wrong</h3>
            <p style="color: #888;">${message}</p>
            <button onclick="fetchMenu()" style="margin-top: 1rem; padding: 0.8rem 1.5rem; background: #da291c; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                Try Again
            </button>
        </div>
    `;
}

// Simulate fetching data from a server
async function fetchMenu() {
  // Show Loader
  menuArea.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
            <p>Loading your favorites...</p>
        </div>
    `;

  try {
    // Simulate network delay (2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate potential random error (10% chance) for testing
    if (Math.random() < 0.1) {
      throw new Error("Network connection lost");
    }

    // Display the menu
    displayMenu();
  } catch (error) {
    // Handle any errors during loading
    console.error("Error loading menu:", error);
    showError("Unable to load the menu. Please check your connection.");
  }
}

// Display menu items
function displayMenu() {
  // Clear the menu area
  menuArea.innerHTML = "";

  // Get unique categories
  const categories = [...new Set(menuData.map((item) => item.category))];

  // Create sections for each category
  categories.forEach((category) => {
    // Create category title
    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = category;
    menuArea.appendChild(categoryTitle);

    // Create food grid
    const foodGrid = document.createElement("div");
    foodGrid.className = "food-grid";

    // Filter items by category
    const categoryItems = menuData.filter((item) => item.category === category);

    // Create cards for each item
    categoryItems.forEach((item) => {
      const foodCard = createFoodCard(item);
      foodGrid.appendChild(foodCard);
    });

    menuArea.appendChild(foodGrid);
  });
}

// Create a food card element
function createFoodCard(item) {
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
        <div class="food-img-container">
            <img src="${item.image}" alt="${item.name}" class="food-img">
        </div>
        <div class="food-info">
            <h3 class="food-name">${item.name}</h3>
            <p class="food-desc">${item.desc}</p>
            <div class="food-footer">
                <span class="food-price">$${item.price.toFixed(2)}</span>
                <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `;
  return card;
}

// --- 4. Cart Functions ---

// Toggle cart sidebar
function toggleCart() {
  cartOverlay.classList.toggle("open");

  // Prevent body scroll when cart is open
  if (cartOverlay.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Add item to cart
function addToCart(itemId) {
  const item = menuData.find((item) => item.id === itemId);

  if (item) {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }

    updateCartUI();
    showToast(`Added ${item.name} to cart!`);
  }
}

// Remove item from cart
function removeFromCart(itemId) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartUI();
    showToast(`Removed ${removedItem.name} from cart`);
  }
}

// Update quantity
function updateQuantity(itemId, change) {
  const item = cart.find((cartItem) => cartItem.id === itemId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartUI();
    }
  }
}

// Update cart UI
function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;

  if (totalItems > 0) {
    cartCountEl.classList.add("active");
  } else {
    cartCountEl.classList.remove("active");
  }

  // Update cart items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <p>Your cart is empty 🍔</p>
            </div>
        `;
    checkoutBtn.disabled = true;
  } else {
    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    checkoutBtn.disabled = false;
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// Show toast notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Initiate checkout
function initiateCheckout() {
  if (cart.length === 0) return;

  // Disable checkout button
  checkoutBtn.disabled = true;

  // Show processing overlay
  processingView.classList.add("active");

  // Update payment text
  paymentText.textContent = "Processing payment...";

  // Simulate payment processing
  setTimeout(() => {
    paymentText.textContent = "Preparing your order...";

    setTimeout(() => {
      // Payment complete
      paymentText.textContent = "Payment successful! 🎉";

      setTimeout(() => {
        // Reset and clear cart
        processingView.classList.remove("active");
        cart = [];
        updateCartUI();
        toggleCart();
        showToast("Order placed successfully!");
      }, 1500);
    }, 1500);
  }, 2000);
}

// Close cart when clicking outside
cartOverlay.addEventListener("click", (e) => {
  if (e.target === cartOverlay) {
    toggleCart();
  }
});

// Close cart with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartOverlay.classList.contains("open")) {
    toggleCart();
  }
});

// --- 5. Initialize ---
document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
});