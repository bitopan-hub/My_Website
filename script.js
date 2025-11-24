// ================= Mobile Navigation Toggle =================
const navToggle = document.querySelector('.nav-toggle');
const body = document.body;

navToggle.addEventListener('click', () => {
    // This class '.nav-open' will be added/removed from the <body>
    body.classList.toggle('nav-open');
});

// Close nav when a link is clicked (useful for mobile)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
    });
});

// ========== HERO IMAGE SLIDESHOW ==========
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5000); // 5 sec per slide
}

showSlides();
