//Menu animation
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp);

//Auto-populate the year
const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

function check_theme(){
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

check_theme()

function toggle_darkMode(){
    if(localStorage.theme==='dark'){
        localStorage.theme='light'
    } else {
        localStorage.theme='dark'
    }
    check_theme();
}