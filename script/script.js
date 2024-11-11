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
