document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const minTime = 3000;
    const start = Date.now();

    if (preloader) {
        window.addEventListener('load', function() {
            const elapsed = Date.now() - start;
            const remaining = minTime - elapsed > 0 ? minTime - elapsed : 0;
            setTimeout(() => {
                preloader.classList.add('hide');
                setTimeout(() => preloader.remove(), 500);
            }, remaining);
        });
    }
});


// document.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.navbar-menu a');

//     sections.forEach((section, index) => {
//         if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
//             navLinks.forEach(link => link.classList.remove('active'));
//             navLinks[index].classList.add('active');
//         }
//     });
// })

const yearEl = document.querySelector('.year');
const year = new Date().getFullYear();
yearEl.textContent = year;

const navToggle =document.querySelector('.nav-toggle');
const navMenu =document.querySelector('.navbar-menu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

