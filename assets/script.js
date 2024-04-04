// [
// {
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

let currentSlide = 0;

// Fonction pour les diapo
function showSlide(index) {
    // Cacher les diapo pas montrer
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    // Diapo specifique
    slides[index].style.display = 'block';
}

// Les dots avec ses evenements
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
        updateActiveDot();
    });
    dotsContainer.appendChild(dot);
    // Marquer le dot actif
    if (index === currentSlide) {
        dot.classList.add("active");
    }
});

// Fonction pour l'affichage
function updateActiveDot() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Premiere diapo
showSlide(currentSlide);

// // Le dot actif
updateActiveDot();

// // Supposez que "dot" soit l'élément dot que vous voulez marquer comme actif
// dot.classList.add("active");


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateActiveDot(); // Mettre à jour la dot active
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateActiveDot(); // Mettre à jour la dot active
}

// Les fleches du carrousel
document.getElementById('arrow_left').addEventListener('click', prevSlide);
document.getElementById('arrow_right').addEventListener('click', nextSlide);
