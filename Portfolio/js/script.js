function Alerta_D(event) {
    event.preventDefault();
    alert("Não há nada para baixar!!");
}

function Alerta_L(event) {
    event.preventDefault();
    alert("Eu ainda não tenho idade para o LinkedIn!");
}

function Alerta_E(event) {
    event.preventDefault();
    alert("Isso foi feito só para decoração!");
}

function Read_M(event) {
    event.preventDefault();
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['programador iniciante', 'estudante do ensino médio', 'futuro desenvolvedor full-stack'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});