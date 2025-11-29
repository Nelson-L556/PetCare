const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputPropietario = document.getElementById("inputPropietario");
const inputFecha = document.getElementById("inputFecha");
const inputSintomas = document.getElementById("inputSintomas");
const btnRegistrar = document.getElementById("btnRegistrar");
const formulario = document.getElementById("form");
const contenidoCitas = document.getElementById("contenidoCitas");

let db;
document.addEventListener("DOMContentLoaded", () => {
  petcareDB();
  cargarPacientesLocal();
  setTimeout(() => cargarPacientesDB(), 500); // espera a que abra la BD
});

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

  const paciente = {
    nombre: inputNombre.value.trim(),
    propietario: inputPropietario.value.trim(),
    email: inputEmail.value.trim(),
    fecha: inputFecha.value.trim(),
    sintomas: inputSintomas.value.trim(),
  };

  // Crear card y agregarla al listado
  const card = crearCard(paciente);
  contenidoCitas.appendChild(card);

  // Guardar en LocalStorage
  guardarPacienteLocal(paciente);

  // Guardar en IndexedDB
  guardarPacienteDB(paciente);

  feedback("Se registró correctamente", "bg-green-500");

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
  const card = document.createElement("div");
  card.classList.add(
    "bg-white",
    "rounded-xl",
    "shadow-xl",
    "p-5",
    "flex",
    "flex-col",
    "gap-2",
    "mb-5"
  );

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
    "flex",
    "items-center",
    "gap-2",
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
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    card.remove();
    eliminarPacienteLocal(email);
    eliminarPacienteDB(email);
  });

  const btnEditar = document.createElement("button");
  btnEditar.classList.add(
    "bg-blue-500",
    "p-2",
    "flex",
    "items-center",
    "gap-2",
    "justify-center",
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
  btnEditar.textContent = "Editar";
  btnEditar.addEventListener("click", () => {
    inputNombre.value = nombre;
    inputPropietario.value = propietario;
    inputEmail.value = email;
    inputFecha.value = fecha;
    inputSintomas.value = sintomas;
    card.remove();
    eliminarPacienteLocal(email);
    eliminarPacienteDB(email);
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

/* ---------------- LOCALSTORAGE ---------------- */
function guardarPacienteLocal(paciente) {
  let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

function cargarPacientesLocal() {
  let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes.forEach(p => {
    const card = crearCard(p);
    contenidoCitas.appendChild(card);
  });
}

function eliminarPacienteLocal(email) {
  let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes = pacientes.filter(p => p.email !== email);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

/* ---------------- INDEXEDDB ---------------- */
function petcareDB() {
  let petcareDB = window.indexedDB.open("petcare", 1);

  petcareDB.onerror = function () {
    console.log("Hubo un error al crear la base de datos");
  };

  petcareDB.onsuccess = function (e) {
    db = e.target.result;
    console.log("Base de datos abierta!!");
  };

  petcareDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    if (!db.objectStoreNames.contains("pacientes")) {
      const objectStore = db.createObjectStore("pacientes", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });
      objectStore.createIndex("propietario", "propietario", { unique: false });
      objectStore.createIndex("fecha", "fecha", { unique: false });
      objectStore.createIndex("sintomas", "sintomas", { unique: false });
    }
  };
}

function guardarPacienteDB(paciente) {
  let transaction = db.transaction(["pacientes"], "readwrite");
  const objectStore = transaction.objectStore("pacientes");
  objectStore.add(paciente);

  transaction.oncomplete = () => {
    console.log("Paciente guardado en IndexedDB");
  };
}

function cargarPacientesDB() {
  const transaction = db.transaction(["pacientes"], "readonly");
  const objectStore = transaction.objectStore("pacientes");
  const request = objectStore.getAll();

  request.onsuccess = () => {
    const pacientes = request.result;
    pacientes.forEach(p => {
      const card = crearCard(p);
      contenidoCitas.appendChild(card);
    });
  };
}

function eliminarPacienteDB(email) {
  const transaction = db.transaction(["pacientes"], "readwrite");
  const objectStore = transaction.objectStore("pacientes");
  const index = objectStore.index("email");
  const request = index.get(email);

  request.onsuccess = () => {
    const paciente = request.result;
    if (paciente) {
      objectStore.delete(paciente.id);
      console.log("Paciente eliminado de IndexedDB");
    }
  };
}
