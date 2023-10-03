
document.addEventListener('DOMContentLoaded', function() {
// Get a reference to all product div elements
const products = document.querySelectorAll('.products');

// Get a reference to the category items
const categoryItems = document.querySelectorAll('#category-list li');

// Add a click event listener to each category item
categoryItems.forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedCategory = event.target.getAttribute('data-category');

        // Loop through all products and hide/show them based on the selected category
        products.forEach((product) => {
            const productCategory = product.getAttribute('data-category');

            if (selectedCategory === 'all' || selectedCategory === productCategory) {
                product.style.display = 'block'; // Show the product
            } else {
                product.style.display = 'none'; // Hide the product
            }
        });
    });
});

});