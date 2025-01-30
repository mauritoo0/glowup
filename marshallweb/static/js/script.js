document.addEventListener('DOMContentLoaded', () => {
    const dateDiv = document.querySelector('.date-text');
    const dateToday = document.querySelector('.date-today');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const track = document.querySelector('.carousel-track');
    const menuDate = document.querySelector('.date-text-button');
    const dateList = document.querySelector('.date-list');
    const byDateBut = document.querySelectorAll('.by-date-button');

    // Inicializar cookie consent
    window.addEventListener("load", function () {
        window.cookieconsent.initialise({
            "palette": {
                "popup": { "background": "#000" },
                "button": { "background": "#f1d600" }
            },
            "theme": "classic",
            "position": "bottom",
            "content": {
                "message": "This website uses cookies to ensure you get the best experience on our website.",
                "dismiss": "Agree",
                "link": "More",
                "href": "/cookies"
            },
            "width": "100vw",
            "language": "en"
        });

    // Aplicando target y ID a los botones de "Select day +"
    if (byDateBut.length > 0) {
        byDateBut.forEach((button, index) => {
            button.addEventListener('click', () => {
                const menu = document.getElementById(`menu-${index}`);
                if (menu) {
                    menu.classList.toggle('active');
                }
            });
        });
    }
    
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

    // Evitar errores si el carrusel no existe en la página
    if (!track) {
        console.warn("No se encontró un elemento '.carousel-track' en esta página.");
        return;
    }

    // Crear carrusel de imágenes
    const pics = Array.from(track.children);
    if (pics.length === 0) return;  // Evitar errores si el track está vacío

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

    
    });
});