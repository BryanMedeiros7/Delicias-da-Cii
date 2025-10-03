// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navPrincipal = document.querySelector('.nav-principal');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        navPrincipal.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navPrincipal.classList.remove('active');
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navPrincipal.contains(e.target)) {
            menuToggle.classList.remove('active');
            navPrincipal.classList.remove('active');
        }
    });
    
    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de fade-in para elementos
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Verificar elementos visíveis no carregamento inicial
    checkFade();
    
    // Verificar elementos visíveis durante o scroll
    window.addEventListener('scroll', checkFade);
});