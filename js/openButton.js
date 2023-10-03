function openMenu() {
    const navlist = document.querySelector('.side-nav');
    const open = document.getElementById('openButton'); // Use 'openButton' ID
    const close = document.getElementById('closeButton'); // Use 'closeButton' ID
    const home = document.getElementById('side-home');
    const about = document.getElementById('side-about');
    const product = document.getElementById('side-product');
    const delivery = document.getElementById('side-delivery');
    const payment = document.getElementById('side-payment');

    if (navlist.style.display === 'block') {
        navlist.style.display = 'none';
        open.style.display = 'block';
        close.style.display = 'none';
        home.style.display = 'none';
        about.style.display = 'none';
        product.style.display = 'none';
        delivery.style.display = 'none';
        payment.style.display = 'none';
    } else {
        navlist.style.display = 'block';
        open.style.display = 'none';
        close.style.display = 'block';
        home.style.display = 'block';
        about.style.display = 'block';
        product.style.display = 'block';
        delivery.style.display = 'block';
        payment.style.display = 'block';
    }
}

function closeMenu() {
    const navlist = document.querySelector('.side-nav');
    const open = document.getElementById('openButton'); // Use 'openButton' ID
    const close = document.getElementById('closeButton'); // Use 'closeButton' ID

    if (navlist.style.display === 'block') {
        navlist.style.display = 'none';
        open.style.display = 'block';
        close.style.display = 'none';
    }
}
