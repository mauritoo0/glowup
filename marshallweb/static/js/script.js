const dateDiv = document.querySelector('.date-text');

const currentDate = new Date();

const weekdays = ['sunday',' monday','tuesday','wednesday','thursday','friday','saturday']

const months = ['january','february','march','april','may','june','july','august','september', 'october','november','december']

const weekday = weekdays[currentDate.getDay()]
const day = currentDate.getDate()
const month = months[currentDate.getMonth()]

const guestDate = `GUEST LIST FOR TODAY, ${weekday.toUpperCase()} ${day} of ${month.toUpperCase()}`;

dateDiv.textContent = guestDate;



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});