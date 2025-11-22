let db;

document.addEventListener("DOMContentLoaded", () => {
  petcareDB();

  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", (e) => {
    const tipoCuenta = document.getElementById("select-registro").value;

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // limpiar mensajes previos
    const mensajeAnterior = document.querySelector(".mensaje-login");
    if(mensajeAnterior) mensajeAnterior.remove();

    if(email === "" || password === "" || tipoCuenta===""){
      mostrarMensaje("Todos los campos son obligatorios", "bg-red-500");
    } else {
      loginUsuario(email, password, tipoCuenta);
    }
  });
});

function petcareDB(){
  let petcareDB = window.indexedDB.open("petcare", 1);

  petcareDB.onerror = () => console.log("Error al abrir la base de datos");

  petcareDB.onsuccess = (e) => {
    db = e.target.result;
    console.log("Base de datos abierta");
  };
}

function loginUsuario(email, password, tipoCuenta){
  const transaction = db.transaction(["usuarios"], "readonly");
  const objectStore = transaction.objectStore("usuarios");
  const index = objectStore.index("email");

  const request = index.get(email);

  request.onsuccess = () => {
    const usuario = request.result;

    if(usuario && usuario.password === password && usuario.tipoCuenta === tipoCuenta){
      mostrarMensaje("Login exitoso", "bg-green-500");

      // Simular sesión iniciada
        localStorage.setItem("email", email)
        localStorage.setItem("Cuenta", tipoCuenta)
      // Redirigir al panel veterinario o página principal
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      mostrarMensaje("Credenciales incorrectas", "bg-red-500");
    }
  };
}

function mostrarMensaje(texto, color){
  const mensaje = document.createElement("p");
  mensaje.textContent = texto;
  mensaje.classList.add(color, "p-2", "text-white", "text-center", "mt-2", "mensaje-login");
  document.getElementById("formularioLogin").appendChild(mensaje);
  setTimeout(() => {
    mensaje.remove()
  }, 3000);
}
