/* MENU SHOW */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*----- ACTIVE AND REMOVE MENU -----*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))
/*----- ANIMATE -----*/
// OVERLAY
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: '1000',
  reset: true
})

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 100})
sr.reveal('.home__social-icon',{delay: 100})
sr.reveal('.home__img',{interval: 200})

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:100})
sr.reveal('.about__text',{delay:200})


sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 100})
sr.reveal('.skills__data',{interval: 100})
sr.reveal('.skills__img',{delay: 200})

sr.reveal('.work__img',{interval: 100})

sr.reveal('.contact__input',{interval: 100})

// IMG


// INFORMATION


// NAV ITEM


// SOCIAL
