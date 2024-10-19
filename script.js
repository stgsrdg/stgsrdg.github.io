// Inicializar Swiper con desplazamiento horizontal para escritorio
const swiper = new Swiper('.swiper-container', {
    loop: false, // No repetir automáticamente
    slidesPerView: 'auto', // Mostrar las imágenes en fila
    spaceBetween: 10, // Espacio entre imágenes
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Controlar el desplazamiento en dispositivos móviles
function adjustScroll() {
    if (window.innerWidth < 768) { // Solo aplicar en dispositivos móviles
        window.scrollTo({
            top: window.scrollY + window.innerHeight * 2, // Desplazar el doble de la altura de la pantalla
            behavior: 'smooth'
        });
    }
}

window.addEventListener('scroll', adjustScroll);
