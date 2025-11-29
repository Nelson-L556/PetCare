document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuCerrar = document.querySelector(".menuCerrado");
  const enlaces = document.querySelector(".enlaces");
  const header = document.querySelector(".header");
  menuRol()


  menu.addEventListener("click", menuVisible);
  menuCerrar.addEventListener("click", menuInvisible);

function menuRol() {
  const rol = localStorage.getItem("Cuenta");
  const cuenta = localStorage.getItem("email");
  const nombre = localStorage.getItem("nombre");
  console.log("Rol:", rol);
  console.log(cuenta);
  console.log(nombre);

  // Selecciona los enlaces específicos
  const linkProductos = document.getElementById('navProductos');
  const linkPanel = document.getElementById("navPanel");
  const linkSesion = document.getElementById('navSesion');

  if (rol === "1") {
    // Usuario adminstrador
    if (linkProductos) linkProductos.classList.remove("hidden");
    if (linkSesion) linkSesion.classList.add("hidden")
    cerrarSesion()

  } else if (rol === "2") {
    // Usuario
    if (linkPanel) linkPanel.classList.add("hidden");
    if (linkSesion) linkSesion.classList.add("hidden")
    cerrarSesion()
  } else {
    // Sin sesión: oculta ambos y muestra "Iniciar sesión"
    if (linkProductos) linkProductos.classList.add("hidden");
    if (linkPanel) linkPanel.classList.add("hidden");
    if (linkSesion) linkSesion.classList.remove("hidden");
  }

  function cerrarSesion(){
    const navegacion = document.getElementById("nav");
    const cerraCuenta = document.createElement("button")
    cerraCuenta.classList.add("text-withe", "cursor-pointer", "flex")
    cerraCuenta.innerHTML = `<div class="relative" id="navNosotros">
            <button class="font-titulo cursor-pointer flex peer relative rounded">${nombre} <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg></button>
            <span 
              class="pointer-events-none absolute left-0 bottom-0
              h-[2px] w-0 bg-white 
              transition-all duration-300 
              peer-hover:w-full">
            </span>
          </div>`
    navegacion.appendChild(cerraCuenta)
    console.log(cerraCuenta)

    cerraCuenta.addEventListener("click", () =>{
      localStorage.removeItem("Cuenta")
      localStorage.removeItem("rol")
      window.location.href = "index.html";

    })
  }
  }

  function menuVisible() {
    // Mostrar enlaces en columna fullscreen
    enlaces.classList.remove("hidden");
    enlaces.classList.add("flex", "flex-col", "justify-center", "items-center", "w-screen", "h-screen", "bg-primary", "text-2xl");

    // Cambiar iconos
    menuCerrar.classList.remove("hidden");
    menuCerrar.classList.add("block");
    menu.classList.add("hidden");

    // Hacer crecer el header solo al click
    header.classList.add("flex", "flex-col", "h-screen", "w-screen", "fixed", "top-0", "left-0", "bg-primary");
  }

  function menuInvisible() {
    // Ocultar enlaces
    enlaces.classList.remove("flex", "flex-col", "justify-center", "items-center", "w-screen", "bg-primary");
    enlaces.classList.add("hidden");

    // Cambiar iconos
    menu.classList.remove("hidden");
    menuCerrar.classList.remove("block");
    menuCerrar.classList.add("hidden");

    // Regresar header a su tamaño original
    header.classList.remove("h-screen", "w-screen", "fixed", "top-0", "left-0", "bg-primary", "flex-col");
  }
});
