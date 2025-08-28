const menu = document.getElementById('menuIcon');
const nav = document.querySelector('nav');

menu.addEventListener('click', () =>{
    nav.classList.toggle('open');

     if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});