const overlay = document.getElementById('nav-overlay');
const openNavButton = document.getElementById('open-button');
const closeNavButton = document.getElementById('close-button');

function opennav() {
    overlay.classList.add('show');
}

function closenav() {
    overlay.classList.remove('show');
}

$('#nav-overlay a').click(closenav);