const emailRegistro = document.getElementById("email");
const btnRegistro = document.getElementById("btnRegistro");
let db
const formulario = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded", () => {
    petcareDB();


    btnRegistro.addEventListener("click", (e) => {
        const tipoCuenta = document.getElementById("select-registro").value;
        e.preventDefault()

        const mensajeAnterior = document.querySelector(".mensaje-feedback")
        if(mensajeAnterior){
            mensajeAnterior.remove()
        }

        const email = document.getElementById("email").value;
        const password = document.getElementById("contraseña").value;

        if(email=== "" || password=== "" || tipoCuenta===""){
        const mensaje = document.createElement("p")
        mensaje.textContent = "Todos los campos son obligatorios"
        mensaje.classList.add("bg-red-500", "p-2", "text-white", "text-center", "font-bold", "font-titulo", "mt-2", "mensaje-feedback")
        formulario.appendChild(mensaje);
        
        setTimeout(() => {
            mensaje.remove()
        }, 3000);
        } else{ 
            crearCliente(email, password, tipoCuenta);
        }
        
    })
})

function petcareDB(){
    // Crear base de datos version 1.0
    let petcareDB = window.indexedDB.open("petcare", 1);

    // Si hay un error
    petcareDB.onerror = function(){
        console.log("Hubo un error al crear la base de datos")
    }
    // Si se creo bien
    petcareDB.onsuccess = function(){
        console.log("Base de datos creada!!")

        db = petcareDB.result;
    }
    // Configuración de la base de datos
    petcareDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore("usuarios", {
            keyPath: "id",
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex("email", "email", {unique: true} );
        objectStore.createIndex("password", "password", {unique: false} );
        objectStore.createIndex("tipoCuenta", "tipoCuenta", {unique: false} );

        console.log("columnas creadas")
    }
}

function crearCliente(email, password, tipoCuenta){
    let transaction = db.transaction(["usuarios"], "readwrite");

    transaction.oncomplete = function(){
        console.log("Transacción completada")
    }

    transaction.onerror = function(){
    console.log("Hubo un error con la transacción")
    }

    const objectStore = transaction.objectStore("usuarios");

    const nuevoRegistro = {email, password, tipoCuenta}
    

    const peticion = objectStore.add(nuevoRegistro);

    peticion.onsuccess = () => {
        
        const mensaje = document.createElement("p")
        mensaje.textContent = "Usuario agregado correctamente"
        mensaje.classList.add("bg-green-500", "p-2", "text-white", "text-center", "font-bold", "font-titulo", "mt-2", "mensaje-feedback")
        formulario.appendChild(mensaje);
        setTimeout(() => {
            window.location.href = "sesion.html";
        }, 3000);
    }

    console.log(peticion);
}