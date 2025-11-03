const inputNombre = document.querySelector(".inputNombre");
const inputEmail = document.querySelector(".inputEmail");
const inputAsunto = document.querySelector(".inputAsunto");
const inputMensaje = document.querySelector(".inputMensaje");
const boton = document.querySelector(".boton");
const formulario = document.querySelector(".formulario")

boton.addEventListener("click", function(e) {
  e.preventDefault();
  validarForm();
});

function validarForm(){
    const mensajeAnterior = document.querySelector(".mensaje-feedback");
    if(mensajeAnterior){
        mensajeAnterior.remove()
    }

    if(inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputAsunto.value.trim() === "" || inputMensaje.value.trim() === ""){
        const mensaje = document.createElement("p")
        mensaje.textContent = "Todos los campos son obligatorios"
        mensaje.classList.add("bg-red-500", "text-white","text-center", "text-xl", "p-2", "mensaje-feedback")
        formulario.appendChild(mensaje);
        setTimeout(() => {
            mensaje.remove()
        }, 3000);

    } else {
        const mensaje = document.createElement("p")
        mensaje.textContent = "Formulario enviado correctamente."
        mensaje.classList.add("bg-green-500", "text-white","text-center", "text-xl", "p-2", "mensaje-feedback")
        formulario.appendChild(mensaje);
        setTimeout(() => {
            mensaje.remove()
        }, 3000);
    }
}

function prevenir(e){
    e.preventDefault();
}

