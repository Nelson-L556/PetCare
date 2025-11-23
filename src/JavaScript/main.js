document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuCerrar = document.querySelector(".menuCerrado");
  const enlaces = document.querySelector(".enlaces");
  const header = document.querySelector(".header");
  menuRol()


  menu.addEventListener("click", menuVisible);
  menuCerrar.addEventListener("click", menuInvisible);

function menuRol() {
  const rol = localStorage.getItem("Cuenta"); // "usuario" o "administrador"
  console.log("Rol:", rol);

  // Selecciona los enlaces específicos
  const linkProductos = document.querySelector('a[href="productos.html"]');
  const linkPanel = document.querySelector('a[href="pacientes.html"]');
  const linkSesion = document.querySelector('a[href="sesion.html"]');

  if (rol === "1") {
    // Usuario normal: oculta panel veterinario
    if (linkPanel) linkPanel.classList.add("bg-red-500");
    if (linkProductos) linkProductos.classList.remove("hidden");
  } else if (rol === "2") {
    // Administrador: oculta productos
    if (linkProductos) linkProductos.classList.add("bg-blue-500");
    if (linkPanel) linkPanel.classList.remove("hidden");
  } else {
    // Sin sesión: oculta ambos y muestra "Iniciar sesión"
    if (linkProductos) linkProductos.classList.add("bg-green-500");
    if (linkPanel) linkPanel.classList.add("hidden");
    if (linkSesion) linkSesion.classList.remove("hidden");
  }

  function cerrarSecion(){
    localStorage.removeItem("email")
    localStorage.removeItem("Cuenta")
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
