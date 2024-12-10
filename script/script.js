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


document.addEventListener("DOMContentLoaded", () => {
    const cidades = document.querySelectorAll(".lista-cidades li");
    const mapFrame = document.getElementById("mapFrame");

    cidades.forEach(cidade => {
        cidade.addEventListener("click", () => {
            const src = cidade.getAttribute("data-src"); // Obtém o atributo data-src
            mapFrame.src = src; // Atualiza o src do iframe
        });
    });
});


//   recife         <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d75163.17291162205!2d-34.92690468695944!3d-8.073136899063146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20turisticos%20recife!5e0!3m2!1sen!2sbr!4v1733843792761!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
// paulista    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d44706.83675414563!2d-34.86880126641423!3d-7.9405790294033896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20tur%C3%ADsticos%20near%20Paulista%20-%20State%20of%20Pernambuco!5e0!3m2!1sen!2sbr!4v1733843989650!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// olinda <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22349.981448711875!2d-34.86055953211083!3d-8.003489176175774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20tur%C3%ADsticos%20near%20Olinda%2C%20State%20of%20Pernambuco!5e0!3m2!1sen!2sbr!4v1733844086115!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// jaboatao <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d252798.99871782525!2d-35.06166771476362!3d-8.103074534179779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20tur%C3%ADsticos%20near%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20Rua%20Vinte%20e%20Um%20-%20Curado%20I%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20State%20of%20Pernambuco!5e0!3m2!1sen!2sbr!4v1733844190494!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
