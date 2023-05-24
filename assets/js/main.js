/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('.nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactProject = document.getElementById('contact-project'),
contactMessage = document.getElementById('contact-message'),
contactAlarm = document.getElementById('contact-alarm')

const sendEmail = (e) => {
    e.preventDefault()

    //Check if the field has a value
    if(contactName?.value === '' || contactEmail?.value === '' || contactProject?.value === '' || contactMessage?.value === ''){
        //Add and remove color
        contactAlarm.classList.remove('color-blue')
        contactAlarm.classList.add('color-red')

        //Show message
        contactAlarm.textContent = 'Write all the input fields 📥'
    }else{
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_sy310','template_email','#contact-form','wXqOm3sFtvI7cK8h2')
        .then(() =>{
            //Show message and add color
            contactAlarm.classList.add('color-blue')
            contactAlarm.textContent = 'Message sent ✅'
            console.log('SUCCESS!');

            //Remove message after five second
            setTimeout(()=>{
                contactAlarm.textContent = ''
            }, 5000)
        },(err) =>{
            alert('Something has failed...', err)
        })

        //To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
        contactMessage.value = ''
        contactAlarm.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 