

const mostrar = document.getElementById("boton1");
const texto = document.getElementById("info1");

mostrar.addEventListener("click", function() {
    if (texto.style.display =="none") {
        texto.style.display = "block";
    } else{
        texto.style.display = "none";

    }
});

