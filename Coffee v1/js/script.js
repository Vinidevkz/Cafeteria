const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navlist = document.getElementById('navlist');
    navlist.classList.toggle('active')

}
btnMobile.addEventListener('click', toggleMenu)