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


const DateInput = document.getElementById('Date')
const TimeInput = document.getElementById('Time')
const PeopleInput = document.getElementById('People')
const SubmitInput = document.getElementById('submit_reservation')

SubmitInput.addEventListener('click', () =>{
    let timeInput = TimeInput.value
    let dateinput = DateInput.value
    let peoppleinput = PeopleInput.value

    console.log(timeInput,'-',dateinput, '-', peoppleinput)
    alert('Your Booking Is Complited!')
    location.reload()
})



const ContactName = document.getElementById('form_name')
const ContactEmail = document.getElementById('Email')
const ConatctMessage = document.getElementById('Message')
const SubmitContact = document.getElementById('submit')

SubmitContact.addEventListener('click', () =>{
    let contactName = ContactName.value
    let contactEmail = ContactEmail.value
    let contactMessage = ConatctMessage.value

    console.log(contactName,'-',contactEmail, '-',contactMessage)
    alert('Your Request has been submited!')
    location.reload()
})