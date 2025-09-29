document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuCerrar = document.querySelector(".menuCerrado");
  const enlaces = document.querySelector(".enlaces");
  const header = document.querySelector(".header");

  menu.addEventListener("click", menuVisible);
  menuCerrar.addEventListener("click", menuInvisible);

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
