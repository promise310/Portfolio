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

        tabs.forEach(tab =>{
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

/*==================== PORTFOLIO PROJECT  ====================*/
const projectDetails = {
    web: [
        {
            name: "ColorScape",
            img: ["./assets/img/projects/cs.png"],
            lan: "HTML / CSS / JavaScript / Python / OpenCV / TensorFlow",
            description: "ColorScape uses AI to explore unknown landscapes based on five colors chosen by users. It can also identify different colors in nature. With ColorScape, you can create imaginary landscapes and envision how other planets or places might look.",
            link: "https://github.com/promise310/LandscapeGenerator"
        },
        {
            name: "covorwave",
            img: ["./assets/img/projects/cw.png"],
            lan: "React / Node.js / Firebase / Spotify API / Stable Diffusion",
            description: "Coverwave is a website that lets users generate personalized album covers using AI. By analyzing Spotify playlists, it creates custom cover art that reflects each user's musical taste and style. The platform uses advanced algorithms to consider factors like genre, mood, and tempo of the songs, producing stunning visuals. With its intuitive interface, Coverwave makes it easy to create album covers in just a few clicks.",
            link: "https://github.com/promise310/coverwave"
        },
        {
            name: "Algorie",
            img: ["./assets/img/projects/al.png"],
            lan: "HTML / CSS / JavaScript / Python / OpenAI API",
            description: "Algorie is a website that helps users with coding problems. It generates hints that guide the user to complete the code independently by taking two inputs: the description of the coding problem and the user's current code.",
            link: "https://github.com/username/project1"
        },
        {
            name: "GDSC - Firebase",
            img: ["./assets/img/projects/gc.png"],
            lan: "HTML / CSS / JavaScript / Firebase",
            description: "This Firebase Workshop project at the Google Developer Student Club (GDSC) is a hands-on session designed to guide student through setting up a Firebase project and connecting to it using JavaScript via the Firebase CDN.",
            link: "https://github.com/promise310/GDSC_ChatApp?tab=readme-ov-file"
        },
        {
            name: "GDSC - Gemini",
            img: ["./assets/img/projects/ge.png"],
            lan: "HTML / CSS / JavaScript / Gemini API",
            description: "This is a Gemini Workshop project at the Google Developer Student Club (GDSC). The project focuses on using the Gemini API to analyze images and provide approximate nutritional information. By passing images through the Gemini API, users can gain insights into the nutritional content of various food items.",
            link: "https://github.com/promise310/GDSC_Gemini?tab=readme-ov-file"
        },
        {
            name: "My Momentum",
            img: ["./assets/img/projects/mo.png"],
            lan: "HTML / CSS / JavaScript",
            description: "My Momentum is a project inspired by the Chrome extension 'Momentum', developed using HTML, CSS, and JavaScript. It includes modules for background and quotes, clock, user login, to-do list, and weather. Users can experience dynamic backgrounds, motivational quotes, real-time clocks, weather updates, and the ability to store and manage to-do lists.",
            link: "https://github.com/promise310/my-momentum"
        },
        {
            name: "Roaming Calculator",
            img: ["./assets/img/projects/ce.png"],
            lan: "HTML / CSS / JavaScript / json",
            description: "This project aims to develop a web extension that performs various calculations, including unit conversions, basic arithmetic, and advanced mathematical functions. The extension will serve as a shortcut in the user's web browser, eliminating the need to retrieve a physical calculator or open another window on their computer.",
            link: "https://github.com/promise310/Calculator-Extension"
        }
    ],
    app: [
        {
            name: "Socialize Recycling",
            img: ["./assets/img/projects/re1.png", "./assets/img/projects/re.png"],
            lan: "React Native / MongoDB / Realm",
            description: "The Socialize Recycling App provides a fun platform for people to connect and promote recycling together. It offers information on recycling practices and encourages users to discover new ways to recycle. Through interactive features, the app fosters a community focused on environmental sustainability and social engagement.",
            link: "https://github.com/promise310/Recycling_App"
        },
        {
            name: "MuHASS",
            img: ["./assets/img/projects/mup.png"],
            lan: "React Native / MongoDB / Node.js / FastAPI",
            description: "This project was created for WEAR Lab at UCF. The real-time mobile app, developed with React Native, displays users' biometric and environmental data. The app connects to the glove watch via Bluetooth and communicates the data collected from the glove' sensors."
            // link: "https://github.com/username/project1"
        },
    ],
    data: [
        {
            name: "Fight Night",
            img: ["./assets/img/projects/fn.png"],
            lan: "Pandas / Python / Flask",
            description: "The goal of this project is to develop a machine learning model using a data-driven approach to predict the outcome of MMA fights. This model will utilize historical MMA match data, including fighter statistics such as record, reach, and height, as well as bout information like date, venue, and judges. By training on this dataset, the model aims to predict the best fighters in individual sports like MMA based on their performance and other relevant factors.",
            link: "https://github.com/promise310/Goat.ED"
        },
    ]
};


// Add this function to your existing JavaScript
function setActiveButton(category) {
    const buttons = document.querySelectorAll('.menu-bar button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
}


// Modify the showCategory function to set the active button
function showCategory(category) {
    const categories = ['all', 'web', 'app', 'data'];
    categories.forEach(cat => {
        document.getElementById(`projects-${cat}`).style.display = 'none';
    });
    if (category === 'all') {
        document.getElementById(`projects-all`).style.display = 'flex';
    } else {
        document.getElementById(`projects-${category}`).style.display = 'flex';
    }

    // Set active button
    setActiveButton(category);
}


function showDetail(category, index) {
    const detail = projectDetails[category][index - 1];
    document.getElementById('modal-name').textContent = detail.name;
    
    const modalImagesContainer = document.getElementById('modal-image');
    modalImagesContainer.innerHTML = detail.img.map(src => `<img src="${src}" alt="Project Image">`).join('');
    
    document.getElementById('modal-lan').textContent = detail.lan;
    document.getElementById('modal-description').textContent = detail.description;
    // document.getElementById('modal-link').href = detail.link;
    const modalLink = document.getElementById('modal-link');
    if (detail.link) {
        modalLink.href = detail.link;
        modalLink.style.display = 'inline-block';
    } else {
        modalLink.style.display = 'none';
    }

    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
      closeModal();
    }
  }





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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const imgH = document.querySelector('.home__img');
const imgA = document.querySelector('.about__img');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== Cursor ====================*/ 
// var cursor = document.querySelector(".cursor");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove", function(e){
//     cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px ";
// });
