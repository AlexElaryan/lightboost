const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-btn');
const burgerClose = document.querySelector('.burger-close');
const a = document.querySelectorAll('.burger-menu ul li a');
const intro = document.querySelector('.intro');

burgerBtn.onclick = () => {
    burgerMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (intro) {
        intro.style.zIndex = '0';
    }
}


function close() {
    burgerMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (intro) {
        intro.style.zIndex = '11';
    }
}

burgerClose.onclick = () => close();

a.forEach(c => {
    c.onclick = () => close();
})

