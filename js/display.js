document.addEventListener("DOMContentLoaded", function () {

const sortButton = document.getElementById('sort-button');
const hiddenElement = document.getElementById('sort-list');

hiddenElement.style.display = 'none';
sortButton.addEventListener('click', () => {
    if (hiddenElement.style.display === 'block') {
        hiddenElement.style.display = 'none';
    } else {
        hiddenElement.style.display = 'block';
    }
});

});