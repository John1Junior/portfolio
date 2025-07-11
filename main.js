var typed= new Typed(".text",{
    strings:["Admin Sys & Réseau" , "web developper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.navbar a');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
        this.classList.remove('active');
    });

    // Ajout d'un événement pour chaque lien de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});
