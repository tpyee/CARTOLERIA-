//declare variable
let cart=[];

function addToCart(pId,pName,pPrice){
    const cartItem={
        id:pId,
        name:pName,
        price:pPrice,
        quantitiy:1,
    };

    const existingItem=cart.find(item=>item.id===pId);

    if(existingItem){
        existingItem.quantitiy++;
    }else{
        cart.push(cartItem);    //if new item, push to cart array
    }

    //update cart icon or display
    update();
}

//update a cart icon in the header 
//to show the number of items in the cart 
function update(){

}

//event listener for the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.each(button => {
        button.addEventListener('click', function () {
            const pId = button.getAttribute('data-product-id');
            const pName = "Product Name"; // Replace with actual product name
            const pPrice = XX.XX; // Replace with actual product price

            addToCart(pId, pName, pPrice);
        });
    });
});