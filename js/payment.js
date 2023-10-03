// JavaScript for handling cart icon and popup
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Sample item data (replace with your data)
    const items = [
        { id: 1, name: "Item 1", price: 10.00, quantity: 2, image: "/images/item1.jpg" },
        { id: 2, name: "Item 2", price: 15.00, quantity: 1, image: "/images/item2.jpg" },
        // Add more items as needed
    ];

    // Event listener for clicking the cart icon
    cartIcon.addEventListener("click", function (e) {
        e.preventDefault();
        cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
    });

    // Function to update the cart and total
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        for (const item of items) {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += item.price;
        }

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Initialize the cart
    updateCart();

    // Event listener for checkout button
    checkoutButton.addEventListener("click", function () {
        alert("Redirect to payment page or handle payment here.");
    });
});