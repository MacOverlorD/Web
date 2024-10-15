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
