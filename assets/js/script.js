// El del carusel

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll ('.carousel')
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: 20,
        shift: 5,
        padding: 5,
        numVisible: 3

    });
});


document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
};




