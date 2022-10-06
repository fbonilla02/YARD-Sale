const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const shopingCartDrop = document.querySelector('.product-detail')


menuEmail.addEventListener('click', ()=>{
    const isAsideClosed = shopingCartDrop.classList.contains('inactive')
    if(!isAsideClosed){
        shopingCartDrop.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')

})

burguerIcon.addEventListener('click', ()=>{
    const isAsideClosed = shopingCartDrop.classList.contains('inactive')

    if(!isAsideClosed){
        shopingCartDrop.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
})

cartIcon.addEventListener('click', ()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    shopingCartDrop.classList.toggle('inactive')
})