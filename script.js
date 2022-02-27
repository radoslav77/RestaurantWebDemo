const nav = document.querySelector('.nav')
const SeeMenuBtn = document.getElementById('see_menu')
const BurgerIcon = document.getElementById('icon')

window.addEventListener('scroll', fixedNav)


function fixedNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



SeeMenuBtn.addEventListener('click', () => {
    
    var LinkMenu = document.createElement('a')
    console.log(123)
})



