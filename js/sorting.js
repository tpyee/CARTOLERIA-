 // JavaScript to handle sorting
 document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const sortingOptions = document.getElementById("sorting-options");

    sortingOptions.addEventListener("click", (event) => {
        if (event.target.nodeName === "A") {
            event.preventDefault();
            const selectedOption = event.target.getAttribute("data-sort");
            sortProducts(selectedOption);
        }
    });

    function sortProducts(option) {
        const products = Array.from(productList.querySelectorAll(".products"));

        products.sort((a, b) => {
            switch (option) {
                case "alphabet-asc":
                    return a.querySelector("h3 a").textContent.localeCompare(b.querySelector("h3 a").textContent);
                case "alphabet-desc":
                    return b.querySelector("h3 a").textContent.localeCompare(a.querySelector("h3 a").textContent);
                case "price-high-to-low":
                    return parseFloat(b.querySelector(".price").textContent.replace("Price: RM ", "")) - parseFloat(a.querySelector(".price").textContent.replace("Price: RM ", ""));
                case "price-low-to-high":
                    return parseFloat(a.querySelector(".price").textContent.replace("Price: RM ", "")) - parseFloat(b.querySelector(".price").textContent.replace("Price: RM ", ""));
                default:
                    return 0;
            }
        });

        // Clear the product list and append the sorted products
        while (productList.firstChild) {
            productList.removeChild(productList.firstChild);
        }

        products.forEach((product) => {
            productList.appendChild(product);
        });
    }
});