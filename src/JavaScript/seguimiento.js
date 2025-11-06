const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputPropietario = document.getElementById("inputPropietario");
const inputContacto = document.getElementById("inputContacto");
const inputSintoma = document.getElementById("inputSintoma");
const btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar.addEventListener("click", (e) =>{
        e.preventDefault()
        const valor = inputNombre.value;
        alert(valor)
})