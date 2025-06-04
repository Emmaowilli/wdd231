// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Hamburger menu functionality
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});