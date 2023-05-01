
// TOGGLE ICON NAVBAR
// let menuIcon = document.querySelector('#menu-icon');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



// Scroll sections activer link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
   });

    //   Sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    // scroll reveal
    ScrollReveal({ 
        reset: true,
        distance: '190px',
        duration : 1000,
        delay: 400
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content, .animation-example', { origin: 'right' });


    // Typed Js 
    const typed = new Typed('.multiple-text', {
        strings: ['Je suis Web Developeur Fullstack','Statisticien économiste'," et Informaticien Programmeur IA","Je parle couramment le Français","l'Anglais","et aussi l'Allemand"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });


