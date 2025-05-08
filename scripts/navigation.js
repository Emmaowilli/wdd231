document.getElementById('menu').addEventListener('click', () => {
    const nav = document.getElementById('nav-links');
    const expanded = nav.classList.toggle('show');
    document.getElementById('menu').setAttribute('aria-expanded', expanded);
});