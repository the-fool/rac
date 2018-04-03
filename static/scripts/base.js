const overlay = document.getElementById('nav-overlay');
const openNavButton = document.getElementById('open-button');
const closeNavButton = document.getElementById('close-button');
const INSTA_ID = '936bdeb7c721479a935e8a8633047d04';

function opennav() {
    overlay.classList.add('show');
}

function closenav() {
    overlay.classList.remove('show');
}


$(function () {
    setUpNav();
    const nabber = instanab('racspokane');
    nabber.run();
});

function setUpNav() {
    $('#nav-overlay a').click(closenav);
}
