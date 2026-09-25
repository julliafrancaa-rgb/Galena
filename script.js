function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("menu-aberto");

}


const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("menu-aberto");

    });

});
