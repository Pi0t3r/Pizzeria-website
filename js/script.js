const navi = document.querySelector('.navi')
const btn = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-xmark')
const navItems = document.querySelectorAll('.effect')


const moveNav = () => {
    navi.classList.add('active')
}
const closeNav = () => {
    navi.classList.remove('active')
}

btn.addEventListener('click',moveNav)
close.addEventListener('click',closeNav)
navItems.addEventListener('click',closeNav)