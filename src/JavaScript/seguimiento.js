const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputPropietario = document.getElementById("inputPropietario");
const inputFecha = document.getElementById("inputFecha");
const inputSintomas = document.getElementById("inputSintomas");
const btnRegistrar = document.getElementById("btnRegistrar");
const formulario = document.getElementById("form");
const contenidoCitas = document.getElementById("contenidoCitas");

btnRegistrar.addEventListener("click", (e) =>{
        e.preventDefault()
        validarFormulario();
})

function validarFormulario(){
        const mensajeFeedback = document.querySelector(".mensajeFeedback")
        if(mensajeFeedback){
                mensajeFeedback.remove();
        }

        if(inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputPropietario.value.trim() === "" ||  inputSintomas.value.trim() === "" || inputFecha.value.trim() === ""){
                const mensaje = document.createElement("p")
                mensaje.classList.add("bg-red-500", "text-white", "p-3", "text-center", "font-bold", "font-titulo", "mt-5", "mensajeFeedback")
                mensaje.textContent = "Complete todos los campos"
                formulario.appendChild(mensaje);

                setTimeout(() => {
                       mensaje.remove()
                }, 3000);
        } else{
                const mensaje = document.createElement("p")
                mensaje.classList.add("bg-green-500", "text-white", "p-3", "text-center", "font-bold", "font-titulo", "mt-5", "mensajeFeedback")
                mensaje.textContent = "Se registro correctamente"
                formulario.appendChild(mensaje);
                nombre()
                email()
                propietario()
                fecha()
                sintoma()

                setTimeout(() => {
                       mensaje.remove()
                }, 3000);
        }
}

function nombre(){
        const valorNombre = inputNombre.value.trim();
        if (valorNombre !== "") {
        const parrafo = document.createElement("div");
        parrafo.textContent = `Paciente: ${valorNombre}`;
        parrafo.classList.add("bg-yellow-500", "text-black", "text-center", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function email(){
        const valorEmail = inputEmail.value.trim();
        if (valorEmail !== "") {
        const parrafo = document.createElement("p");
        parrafo.textContent = `Paciente: ${valorEmail}`;
        parrafo.classList.add("bg-yellow-500", "text-black", "text-center", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function propietario(){
        const valorPropietario = inputPropietario.value.trim();
        if (valorPropietario !== "") {
        const parrafo = document.createElement("p");
        parrafo.textContent = `Paciente: ${valorPropietario}`;
        parrafo.classList.add("bg-yellow-500", "text-black", "text-center", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function fecha(){
        const valorFecha = inputFecha.value.trim();
        if (valorFecha !== "") {
        const parrafo = document.createElement("p");
        parrafo.textContent = `Paciente: ${valorFecha}`;
        parrafo.classList.add("bg-yellow-500", "text-black", "text-center", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function sintoma(){
        const valorSintoma = inputSintomas.value.trim();
        if (valorSintoma !== "") {
        const parrafo = document.createElement("p");
        parrafo.textContent = `Paciente: ${valorSintoma}`;
        parrafo.classList.add("bg-yellow-500", "text-black", "text-center", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}