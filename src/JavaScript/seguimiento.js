const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputPropietario = document.getElementById("inputPropietario");
const inputFecha = document.getElementById("inputFecha");
const inputSintomas = document.getElementById("inputSintomas");
const btnRegistrar = document.getElementById("btnRegistrar");
const formulario = document.getElementById("form");
const contenidoCitas = document.getElementById("contenidoCitas");

btnRegistrar.addEventListener("click", (e) => {
  e.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  const mensajeFeedback = document.querySelector(".mensajeFeedback");
  if (mensajeFeedback) mensajeFeedback.remove();

  const camposVacios =
    inputNombre.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputPropietario.value.trim() === "" ||
    inputSintomas.value.trim() === "" ||
    inputFecha.value.trim() === "";

  if (camposVacios) {
    feedback("Complete todos los campos", "bg-red-500");
    return;
  }

  // Crear card y agregarla al listado
  const card = crearCard({
    nombre: inputNombre.value.trim(),
    propietario: inputPropietario.value.trim(),
    email: inputEmail.value.trim(),
    fecha: inputFecha.value.trim(),
    sintomas: inputSintomas.value.trim(),
  });

  contenidoCitas.appendChild(card);
  feedback("Se registró correctamente", "bg-green-500");

  // Limpiar formulario
  formulario.reset();
}

function feedback(texto, colorClase) {
  const mensaje = document.createElement("p");
  mensaje.classList.add(
    colorClase,
    "text-white",
    "p-3",
    "text-center",
    "font-bold",
    "font-titulo",
    "mt-5",
    "mensajeFeedback"
  );
  mensaje.textContent = texto;
  formulario.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 3000);
}

function crearCard({ nombre, propietario, email, fecha, sintomas }) {
  // Contenedor de la card
  const card = document.createElement("div");
  card.classList.add(
    "bg-white",
    "rounded-xl",
    "shadow-xl",
    "p-5",
    "flex",
    "flex-col",
    "gap-2",
    "mb-5" // margen entre cards
  );

  // Contenido
  card.appendChild(linea("Paciente:", nombre));
  card.appendChild(linea("Propietario:", propietario));
  card.appendChild(linea("Email:", email));
  card.appendChild(linea("Fecha:", fecha));
  card.appendChild(linea("Síntomas:", sintomas));

  // Botones
  const acciones = document.createElement("div");
  acciones.classList.add("flex", "gap-2", "mt-3", "w-full");

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add(
    "bg-red-500",
    "p-2",
    'flex',
    'items-center',
    'gap-2',
    "justify-center",
    "cursor-pointer",
    "hover:bg-red-600",
    "text-white",
    "font-bold",
    "font-titulo",
    "text-center",
    "md:w-1/2",
    "hover:scale-102",
    "transition-all",
    "w-full"
  );
  btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

  btnEliminar.addEventListener("click", () => {
    card.remove();
  });

  const btnEditar = document.createElement("button");
  btnEditar.classList.add(
  "bg-blue-500",
  "p-2",
  'flex',
  'items-center',
  'gap-2', "justify-center",
  "cursor-pointer",
  "hover:bg-blue-600",
  "text-white",
  "font-bold",
  "font-titulo",
  "text-center",
  "md:w-1/2",
  "hover:scale-102",
  "transition-all",
  "w-full"
  );
  btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
  
  btnEditar.addEventListener("click", () => {
    // Rellenar formulario para edición simple
    inputNombre.value = nombre;
    inputPropietario.value = propietario;
    inputEmail.value = email;
    inputFecha.value = fecha;
    inputSintomas.value = sintomas;
    // Opcional: eliminar la card antigua al editar
    card.remove();
  });

  acciones.appendChild(btnEliminar);
  acciones.appendChild(btnEditar);
  card.appendChild(acciones);

  return card;
}

function linea(label, valor) {
  const p = document.createElement("p");
  p.innerHTML = `<span class="font-bold">${label}</span> ${valor}`;
  p.classList.add("text-black");
  return p;
}
