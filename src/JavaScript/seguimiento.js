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
                propietario()
                email()
                fecha()
                sintoma()
                citasDiv()
                botonEliminar()

                setTimeout(() => {
                       mensaje.remove()
                }, 3000);
        }
}

function nombre(){
        const valorNombre = inputNombre.value.trim();
        if (valorNombre !== "") {
        const parrafo = document.createElement("div");
        parrafo.innerHTML = `<span class="font-bold">Paciente:</span> ${valorNombre}`;
        parrafo.classList.add("text-black", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function email(){
        const valorEmail = inputEmail.value.trim();
        if (valorEmail !== "") {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `<span class="font-bold">Email:</span> ${valorEmail}`;
        parrafo.classList.add("text-black", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function propietario(){
        const valorPropietario = inputPropietario.value.trim();
        if (valorPropietario !== "") {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `<span class="font-bold">Propietario:</span> ${valorPropietario}`;
        parrafo.classList.add("text-black", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function fecha(){
        const valorFecha = inputFecha.value.trim();
        if (valorFecha !== "") {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `<span class="font-bold">Fecha:</span> ${valorFecha}`;
        parrafo.classList.add("text-black", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function sintoma(){
        const valorSintoma = inputSintomas.value.trim();
        if (valorSintoma !== "") {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `<span class="font-bold">Sintomas:</span> ${valorSintoma}`;
        parrafo.classList.add("text-black", "p-2", "rounded", "mt-2");
        contenidoCitas.appendChild(parrafo);
    }
}

function citasDiv(){
        contenidoCitas.classList.add("p-5", "bg-white", "rounded-xl", "shadow-xl")
}

function botonEliminar(){
        const contenedorBotones = document.createElement("div")
        contenedorBotones.classList.add("flex", "gap-2", "w-full")

        const eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("bg-red-500", "p-2", 'flex', 'items-center', 'gap-2', "justify-center", "cursor-pointer", "hover:bg-red-600", "text-white", "font-bold", "font-titulo", "text-center", "w-1/2" );
        eliminarBtn.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        contenedorBotones.appendChild(eliminarBtn);

        const editarBtn = document.createElement("button");
        editarBtn.classList.add("bg-primary", "p-2", 'flex', 'items-center', 'gap-2', "cursor-pointer", "hover:bg-primary-hover", "text-white", "font-bold", "text-center", "font-titulo", "justify-center", "w-1/2" );
        editarBtn.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'        
        contenedorBotones.appendChild(editarBtn);

        contenidoCitas.appendChild(contenedorBotones);
}

