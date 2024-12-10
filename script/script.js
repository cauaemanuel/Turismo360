function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuIcon = document.getElementById("menuIcon");
    const hamburguer = document.querySelector(".hamburguer");

    // Alterna a classe `open` no menu para abri-lo ou fechá-lo
    menu.classList.toggle("open");
    hamburguer.classList.toggle("fixed");

   
    if (menu.classList.contains("open")) {
        menuIcon.src = "assets/close.svg";  // Ícone de "X"
    } else {
        menuIcon.src = "assets/menu.svg";  // Ícone de hambúrguer
    }
}


function ajustarMenu() {
    const menu = document.getElementById("menu");
    const hamburguer = document.querySelector(".hamburguer");
    const menuIcon = document.getElementById("menuIcon");

    if (window.innerWidth >= 992) {
        // Versão desktop: menu sempre aberto, sem botão hambúrguer
        menu.classList.add("open");
        hamburguer.style.display = "none"; // Esconde o botão hambúrguer
    } else {
        // Versão mobile: menu fechado por padrão, botão hambúrguer visível
        menu.classList.remove("open");
        hamburguer.style.display = "block"; // Exibe o botão hambúrguer
        menuIcon.src = "assets/menu.svg"; // Garante o ícone correto
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ajustarMenu(); // Ajusta o estado do menu no carregamento
});

window.addEventListener("resize", ajustarMenu); // Ajusta o menu ao redimensionar
