const navi = document.querySelector('.navi')
const btn = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-xmark')
const allNavItems = document.querySelectorAll('.effect')

const moveNav = () => {
    navi.classList.add('active')
}
const closeNav = () => {
    navi.classList.remove('active')
}



const handleNav = () => {
    navi.classList.toggle('active')
    allNavItems.forEach(item => {
        item.addEventListener('click', () =>{
            navi.classList.remove('active')
        })
    })
    
}


btn.addEventListener('click',moveNav)
close.addEventListener('click',closeNav)