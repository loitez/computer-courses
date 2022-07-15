// timer
let countDownDate = new Date("Nov 18, 2023 15:37:25").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.querySelector(".timer").innerHTML = `<table class="timer__table">
        <tr><td><span>${days}</span> Дней</td><td><span>${hours}</span> Часов</td><td><span>${minutes}</span> Минут</td><td><span>${seconds}</span> Секунд</td></tr>
        </table>`;


    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}, 1000);

// burger menu

const burgerIcon = document.querySelector('.burger-icon')
const menu = document.querySelector('.navbar__menu')
const overlay = document.querySelector('.overlay')

burgerIcon.addEventListener('click', () => {
    toggleClass(menu)
})

document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay')) {
        menu.classList.remove('active')
        toggleOverlay()
    }
})

function toggleClass (element) {
    element.classList.toggle('active')
    toggleOverlay()
}

function toggleOverlay() {
    if (menu.classList.contains('active')) {
        overlay.classList.add('active')
    } else {
        overlay.classList.remove('active')
    }
}

// teachers
 const teacherCards = document.querySelectorAll('.teachers__content-card')
const teacherBtns = document.querySelectorAll('.teachers__content-button')

teacherCards.forEach((item) => {
    item.onmouseover = () => {
        toggleClass(item)
        const btn = item.querySelector('.teachers__content-button')
        toggleClass(btn)
    }
    item.onmouseout = () => {
        toggleClass(item)
        const btn = item.querySelector('.teachers__content-button')
        toggleClass(btn)
    }
})