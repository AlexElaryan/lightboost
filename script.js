const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-btn');
const burgerClose = document.querySelector('.burger-close');
const a = document.querySelectorAll('.burger-menu ul li a');



burgerBtn.onclick = () => {
    burgerMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function close() {
    burgerMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

burgerClose.onclick = () => close();

a.forEach(c => {
    c.onclick = () => close();
})

