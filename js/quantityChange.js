document.addEventListener('DOMContentLoaded', function() {
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
    const quantityElements = document.querySelectorAll(".num");
   

    // Add click event listeners for each product
    for (let i = 0; i < plusButtons.length; i++) {
        let quantity = 1; // Initial quantity for each product
        quantity = (quantity < 10) ? "0" + quantity : quantity;
        quantityElements[i].innerText = quantity; // Update the quantity for this product
        plusButtons[i].addEventListener("click", () => {
            quantity++;
            quantity = (quantity < 10) ? "0" + quantity : quantity;
            quantityElements[i].innerText = quantity; // Update the quantity for this product
            console.log(quantity);
        });

        minusButtons[i].addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantity = (quantity < 10) ? "0" + quantity : quantity;
                quantityElements[i].innerText = quantity; // Update the quantity for this product
                console.log(quantity);
            }

        
        });
    }
});

