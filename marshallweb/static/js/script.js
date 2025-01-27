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
    
    

    //Aplicando target y ID a los diferentes botones de "Select day +" para que funcionen los eventos de JS

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

    
    
    

//Obteniendo los valores de la fechad e hoy
const currentDate = new Date();
const weekdays = ['sunday',' monday','tuesday','wednesday','thursday','friday','saturday']
const months = ['january','february','march','april','may','june','july','august','september', 'october','november','december']
const weekday = weekdays[currentDate.getDay()]
const day = currentDate.getDate()
const month = months[currentDate.getMonth()]

//funcion para aplicar el sufijo detras de la fecha
function getDaySuffix(day) {
    if (day % 10 === 1 && day !== 11) return 'st';
    if (day % 10 === 2 && day !== 12) return 'nd';
    if (day % 10 === 3 && day !== 13) return 'rd';
    return 'th';
}

//Guardada en variables la fecha de hoy e insertandola en el html
const guestDate = `${weekday.toUpperCase()} ${day}${getDaySuffix(day)} OF ${month.toUpperCase()} <span class="icon-down"><i class="fa-solid fa-caret-down"></i></span>`;
const todayDate = `${weekday.toUpperCase()} ${day} OF ${month.toUpperCase()}`;


    if (dateDiv || dateToday) {
        if (dateDiv) dateDiv.innerHTML = guestDate;
        if (dateToday) dateToday.textContent = todayDate;
    }


//Agregada la clase 'active' en los botones desplegables del index para mostrar las li
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

menuDate.addEventListener('click', ()=> {
    dateList.classList.toggle('active');
})


    


//Exceptuando los html que no tienen el carrusel para que no arroje error la consola de los mismos
    if (!track) {
        console.warn("No se encontró un elemento '.carousel-track' en esta página.");
        return;
    }

//Creado el carrusel de imagenes del index   
const pics = Array.from(track.children);

const imageWidth = pics[0].getBoundingClientRect().width;

let currentIndex = 0;

const moveToSlide = (index) => {
    const amountToMove = -index * imageWidth;
    track.style.transform = `translateX(${amountToMove}px)`;
};

//Botones de 'adelante' y 'atrás' del carrusel
nextButton.addEventListener('click', () => {
    if (currentIndex < pics.length - 1) {
        currentIndex++;
        moveToSlide(currentIndex);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(currentIndex);
    }
});

})

