const dateDiv = document.querySelector('.date-text');
const dateToday = document.querySelector('.date-today');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const menuDate = document.querySelector('.date-text-button');
const dateList = document.querySelector('.date-list');
const byDateButton = document.querySelector('.by-date-button');
const byDateList = document.querySelector('.by-date-list');



// Obteniendo valores de la fecha de hoy
const currentDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekday = weekdays[currentDate.getDay()];
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];


// Función para aplicar el sufijo detrás del número del día
function getDaySuffix(day) {
    if (day % 10 === 1 && day !== 11) return 'st';
    if (day % 10 === 2 && day !== 12) return 'nd';
    if (day % 10 === 3 && day !== 13) return 'rd';
    return 'th';
}

// Generar fecha con sufijo
const guestDate = `${weekday.toUpperCase()} ${day}${getDaySuffix(day)} OF ${month.toUpperCase()} <span class="icon-down"><i class="fa-solid fa-caret-down"></i></span>`;
const todayDate = `${weekday.toUpperCase()} ${day} OF ${month.toUpperCase()}`;


// Insertar fecha en el HTML si los elementos existen
if (dateDiv) dateDiv.innerHTML = guestDate;
if (dateToday) dateToday.textContent = todayDate;


// Agregar clase 'active' al menú de navegación
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
if (menuDate && dateList) {
    menuDate.addEventListener('click', () => {
        dateList.classList.toggle('active');
    });
}

if (byDateButton && byDateList) {
    byDateButton.addEventListener('click', ()=> {
        byDateList.classList.toggle('active')
    })
}

// Evitar errores si el carrusel no existe en la página
if (!track) {
    console.warn("No se encontró un elemento '.carousel-track' en esta página.");
    } else {
    // Crear carrusel de imágenes
    const pics = Array.from(track.children);
    if (pics.length === 0) {
        console.warn("El carrusel está vacío.");
    } else {
        const imageWidth = pics[0].getBoundingClientRect().width;
    
        let currentIndex = 0;
        const moveToSlide = (index) => {
            const amountToMove = -index * imageWidth;
            track.style.transform = `translateX(${amountToMove}px)`;
        };

        // Botones del carrusel
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (currentIndex < pics.length - 1) {
                    currentIndex++;
                    moveToSlide(currentIndex);
                }
            });
        }
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    moveToSlide(currentIndex);
                }
            });
        }
    }
}
