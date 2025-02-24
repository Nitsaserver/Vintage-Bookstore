// JavaScript for Cart Page

// Sample data for cart items (replace this with real data fetched from localStorage or database)
let cart = [
    { id: 1, title: "The Great Gatsby", price: 10.99, quantity: 1 },
    { id: 2, title: "Moby Dick", price: 12.50, quantity: 2 }
];

// Function to display cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartItemsContainer.innerHTML = ""; // Clear existing items

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${item.title} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

// Checkout function
document.getElementById("checkout").addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // Add your checkout logic here
});

// Initial render
renderCart();
