const dateDiv = document.querySelector('.date-text');

const currentDate = new Date();

const weekdays = ['sunday',' monday','tuesday','wednesday','thursday','friday','saturday']

const months = ['january','february','march','april','may','june','july','august','september', 'october','november','december']

const weekday = weekdays[currentDate.getDay()]
const day = currentDate.getDate()
const month = months[currentDate.getMonth()]

const guestDate = `${weekday.toUpperCase()} ${day} OF ${month.toUpperCase()} PARTIES`;

dateDiv.textContent = guestDate;



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const pics = Array.from(track.children);

// Calcula el ancho de cada imagen
const imageWidth = pics[0].getBoundingClientRect().width;

// Posición inicial
let currentIndex = 0;

const moveToSlide = (index) => {
    const amountToMove = -index * imageWidth;
    track.style.transform = `translateX(${amountToMove}px)`;
};

// Evento para botón "next"
nextButton.addEventListener('click', () => {
    if (currentIndex < pics.length - 1) {
        currentIndex++;
        moveToSlide(currentIndex);
    }
});

// Evento para botón "prev"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(currentIndex);
    }
});