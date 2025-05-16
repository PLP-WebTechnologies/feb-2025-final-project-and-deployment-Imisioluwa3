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


// document.addEventListener('DOMContentLoaded', function() {
//     // Get all navigation links
//     const navLinks = document.querySelectorAll('.navbar-menu a');
    
//     // Get current page file name
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
//     // Add active class based on current page
//     navLinks.forEach(link => {
//         // Get the href attribute
//         const href = link.getAttribute('href');
        
//         // Check if this is the current page
//         if (href === currentPage) {
//             link.classList.add('active');
//         } else if (currentPage === '' && href === 'index.html') {
//             // Special case for root URL
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check if the link matches the current page
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            // Special case for index.html/root URL
            if ((currentPage === 'index.html' || currentPage === '') && linkHref === 'index.html') {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});




const yearEl = document.querySelector('.year');
const year = new Date().getFullYear();
yearEl.textContent = year;

const navToggle =document.querySelector('.nav-toggle');
const navMenu =document.querySelector('.navbar-menu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

