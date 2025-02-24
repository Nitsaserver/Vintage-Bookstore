// JavaScript for Home Page

// Check if cart exists in localStorage, if not, create one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart function
function addToCart(id, title, price) {
    // Check if the book is already in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity
    } else {
        cart.push({ id, title, price, quantity: 1 }); // Add new item
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} added to cart!`);
}

// Attach event listeners to Add to Cart buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const bookElement = button.closest(".book");
            const title = bookElement.querySelector("h2").textContent;
            const price = parseFloat(bookElement.querySelector(".price").textContent);
            const id = index + 1; // Generate ID dynamically based on index

            addToCart(id, title, price);
        });
    });
});
