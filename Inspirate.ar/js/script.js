document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    //Con la siguiente linea ejecutamos la clase de css para mostrar menu.
    document.getElementById("show-menu").classList.toggle('show-lateral');
}