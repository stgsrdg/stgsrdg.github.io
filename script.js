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




window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const wrapper = document.getElementById("loader-wrapper");
    const warning = document.getElementById("connection-warning");

    // Mostrar advertencia después de 4 segundos si la página sigue cargando
    const warningTimeout = setTimeout(function() {
        warning.style.display = "block";
    }, 4000);

    loader.addEventListener("animationiteration", function() {
        // Una vez que se complete la vuelta actual, realiza la transición hacia arriba
        wrapper.style.transform = "translateY(-100%)"; // Mueve el fondo hacia arriba
        document.getElementById("content").style.display = "block"; // Muestra el contenido
        
        // Cancela el mensaje de advertencia si ya cargó
        clearTimeout(warningTimeout);

        // Espera 1 segundo para que la transición termine antes de ocultar el wrapper
        setTimeout(function() {
            wrapper.style.display = "none";
        }, 1000);
    });

    // Desactiva la animación infinita cuando la página está completamente cargada
    loader.style.animationIterationCount = "1";
});
