document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typingText = document.querySelector('.typing-text');
const textToType = "I'm a KMUTT Student.";
let i = 0;

function typeEffect() {
    if (i < textToType.length) {
        typingText.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = () => {
    typeEffect();
};

const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Toggle the active class on the nav when the mobile icon is clicked
mobileMenuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Remove the active class from nav when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
