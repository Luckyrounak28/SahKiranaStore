// Function to handle product search
function searchProduct() {
    const query = document.getElementById('search-input').value.toLowerCase(); // Get the search query
    const products = document.querySelectorAll('.product'); // Select all products
    
    products.forEach(product => {
        const productName = product.querySelector('.product-info h3').textContent.toLowerCase(); // Get product name
        if (productName.includes(query)) {
            product.style.display = 'block'; // Show product if it matches the search query
        } else {
            product.style.display = 'none'; // Hide product if it doesn't match the search query
        }
    });
}

// Function to filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product'); // Select all products

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category'); // Get the product category
        if (productCategory === category || category === 'all') {
            product.style.display = 'block'; // Show products that match the category
        } else {
            product.style.display = 'none'; // Hide products that don't match the category
        }
    });
}

// Function to add products to the cart
function addToCart(productName, price, quantityOrVolume) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Get cart items from localStorage or initialize empty array

    // Add the selected product to the cart
    cartItems.push({
        productName: productName,
        price: price,
        quantityOrVolume: quantityOrVolume
    });

    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save updated cart back to localStorage

    alert(`Added ${quantityOrVolume} of ${productName} to cart at ₹${price} each.`); // Alert for successful addition
    updateCartNotification(); // Update cart count in the navigation
}

// Function to update the cart notification (show number of items in the cart)
function updateCartNotification() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Get cart items
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = cartItems.length; // Update cart item count
}

// Function to handle "Buy Now"
function buyNow(productName, price, quantityOrVolume) {
    // Add the product to the cart first (optional, you can remove if not needed)
    addToCart(productName, price, quantityOrVolume);

    // Redirect to the buy-now page with product details in the query parameters
    const url = `buy-now.html?product=${encodeURIComponent(productName)}&price=${price}&quantity=${quantityOrVolume}`;
    window.location.href = url; // Redirect to Buy Now page
}

// On page load, update cart notification
document.addEventListener('DOMContentLoaded', () => {
    updateCartNotification(); // Show number of items in the cart on page load
});
// Function to handle adding products to the cart
function addToCart(productName, price, quantityOrVolume) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage

    // Add the selected product to the cart
    cartItems.push({
        productName: productName,
        price: price,
        quantityOrVolume: quantityOrVolume
    });

    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save the cart back to localStorage
    alert(`Added ${quantityOrVolume} of ${productName} to cart at ₹${price} each.`);
    updateCartNotification(); // Update the cart item count
}

// Function to update the cart notification (number of items in cart)
function updateCartNotification() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = cartItems.length; // Update the cart count
}

// Function to handle "Buy Now"
function buyNow(productName, price, quantityOrVolume) {
    // Add the product to the cart first (optional)
    addToCart(productName, price, quantityOrVolume);

    // Redirect to buy-now page with product details in URL
    const url = `buy-now.html?product=${encodeURIComponent(productName)}&price=${price}&quantity=${encodeURIComponent(quantityOrVolume)}`;
    window.location.href = "Buynow.html"; // Redirect to buy-now page
}

// On page load, update cart notification
document.addEventListener('DOMContentLoaded', () => {
    updateCartNotification(); // Show the number of items in the cart when the page loads
});
