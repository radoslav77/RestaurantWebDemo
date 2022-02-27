const BodyHtml = document.querySelector('.body_container')
const Navbar = document.querySelector('.nav')
const ContainerEl = document.querySelector('.menu_container')


/*
let load = 0
let interval = setInterval(blurring, 30)
Navbar.style.zIndex = 1
//currentLink()

function blurring() {
    load++

    if (load > 99) {
        clearInterval(interval)
    }
    //loadText.innerText = `${load}%`
    
    //BodyHtml.style.zIndex = -1
    BodyHtml.style.opacity = scale(load, 0, 100, 1, 0)
    BodyHtml.style.filter = `-blur(${scale(load, 0, 100, 30, 0)}px)`
    //slidingCarousel.style.transform = `translateX(${scale(load, 0, 100, 30, 0)}px)`
    //carousleWrapper.style.opacity = scale(load, 100, 0, 1, 0)

    if (load === 100) {
        window.addEventListener('mouseover', ()=> {
            body.style.overflowY = 'scroll'    
        })
        
   }

}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}*/