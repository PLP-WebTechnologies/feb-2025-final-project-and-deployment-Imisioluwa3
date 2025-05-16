const yearEl = document.querySelector('.year');
const year = new Date().getFullYear();
yearEl.textContent = year;

const navToggle =document.querySelector('.nav-toggle');
const navMenu =document.querySelector('.navbar-menu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

