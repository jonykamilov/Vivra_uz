// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            navMenu?.classList.remove('active');
        }
    });
});

// Simple form handling
const form = document.getElementById('consultationForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Rahmat! Siz bilan tez orada bog‘lanamiz.');
    form.reset();
});