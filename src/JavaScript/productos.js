const desparasitantesBtn = document.getElementById("desparasitantesBtn");
const antibioticosBtn = document.getElementById("antibioticosBtn");
const analgesicosBtn = document.getElementById("analgesicosBtn");
const antiflamatoriosBtn = document.getElementById("antiflamatoriosBtn");
const cardiacosBtn = document.getElementById("cardiacosBtn");
const oftalmicosBtn = document.getElementById("oftalmicosBtn");
const farmaciaBtn = document.getElementById("farmaciaBtn");
const diureticoBtn = document.getElementById("diureticoBtn");
const todosBtn = document.getElementById("todosBtn");

const productos = [
    {
        productoNombre: "Ditulan",
        precio: 30,
        img: "https://lafarmascota.com/wp-content/uploads/2020/05/dirulan.jpg",
        categoria: "diuretico",
        boton: "Comprar"
    },
    {
        productoNombre: "Nexgard Spectra",
        precio: 100,
        img: "https://lafarmascota.com/wp-content/uploads/2020/09/nexgard-spectra-1-tableta-400x400.png",
        categoria: "desparacitante",
        boton: "Comprar"
    },
    {
        productoNombre: "Feline Fullspot",
        precio: 150,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/fullspot-400x400.jpg",
        categoria: "desparacitante",
        boton: "Comprar"
    },
        {
        productoNombre: "Amoxicilina y Ácido Clavulánico Spectrum",
        precio: 67,
        img: "https://lafarmascota.com/wp-content/uploads/2021/12/amoxicilina-acido-clavulanico-spectrum-400x400.jpg",
        categoria: "antibiotico",
        boton: "Comprar"
    },
    {
        productoNombre: "Doxiciclina para perros Spectrum",
        precio: 85,
        img: "https://lafarmascota.com/wp-content/uploads/2024/01/doxicilina-400x400.jpg",
        categoria: "antibiotico",
        boton: "Comprar"
    },
    {
        productoNombre: "Leidofs (gabapentina) 100 y 400 mg",
        precio: 100,
        img: "https://lafarmascota.com/wp-content/uploads/2021/08/leidofs400-400x400.jpg",
        categoria: "analgesico",
        boton: "Comprar"
    },
    {
        productoNombre: "Tramadol Pets",
        precio: 50,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/tramadol-para-perros-400x400.jpg",
        categoria: "analgesico",
        boton: "Comprar"
    },
    {
        productoNombre: "Relaxicam Tabletas",
        precio: 67,
        img: "https://lafarmascota.com/wp-content/uploads/2024/01/relaxicam-tabletas-400x400.jpg",
        categoria: "analgesico",
        boton: "Comprar"
    },
    {
        productoNombre: "Cortipet",
        precio: 299,
        img: "https://lafarmascota.com/wp-content/uploads/2022/06/cortipet-5mg-400x400.jpg",
        categoria: "antiinflamatorio",
        boton: "Comprar"
    },
    {
        productoNombre: "Relaxicam oral",
        precio: 99,
        img: "https://lafarmascota.com/wp-content/uploads/2023/12/relaxicam-suspension-oral-400x400.jpg",
        categoria: "antiinflamatorio",
        boton: "Comprar"
    },
    {
        productoNombre: "Predni Pets",
        precio: 199,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/predni-pets-l-400x400.jpg",
        categoria: "antiinflamatorio",
        boton: "Comprar"
    },
    {
        productoNombre: "Inodil",
        precio: 300,
        img: "https://lafarmascota.com/wp-content/uploads/2022/06/inodil-1mg-400x400.jpg",
        categoria: "cardiaco",
        boton: "Comprar"
    },
    {
        productoNombre: "Humectan",
        precio: 99,
        img: "https://lafarmascota.com/wp-content/uploads/2020/05/humectan-gotas-400x400.jpg",
        categoria: "oftalmico",
        boton: "Comprar"
    },
    {
        productoNombre: "Cronval HD",
        precio: 699,
        img: "https://lafarmascota.com/wp-content/uploads/2020/05/cronval125-400x400.jpg",
        categoria: "farmacia",
        boton: "Comprar"
    },
    {
        productoNombre: "Gastroprazol",
        precio: 50,
        img: "https://lafarmascota.com/wp-content/uploads/2020/05/gastroprazol-400x400.jpg",
        categoria: "antiinflamatorio",
        boton: "Comprar"
    },
]

todosBtn.addEventListener("click", () =>{
    mostrarProductos(productos);
})

desparasitantesBtn.addEventListener("click", () =>{
    filtrarProductos("desparacitante");
})

antibioticosBtn.addEventListener("click", () =>{
    filtrarProductos("antibiotico");
})

analgesicosBtn.addEventListener("click", () =>{
    filtrarProductos("analgesico");
})

cardiacosBtn.addEventListener("click", () =>{
    filtrarProductos("cardiaco");
})

oftalmicosBtn.addEventListener("click", () =>{
    filtrarProductos("oftalmico");
})

farmaciaBtn.addEventListener("click", () =>{
    filtrarProductos("farmacia");
})

diureticoBtn.addEventListener("click", () =>{
    filtrarProductos("diuretico");
})

antiflamatoriosBtn.addEventListener("click", () =>{
    filtrarProductos("antiinflamatorio");
})

const mostrarProductos = (productosMostrar) => {
    const shopContent = document.getElementById("shopContent");

    shopContent.innerHTML = "";

    productosMostrar.forEach(producto => {
        const div = document.createElement("div");
        div.className = "bg-white text-center m-2 p-2";
        div.innerHTML = `
        <img src="${producto.img}" class="w-full" alt="medicina">
        <h3 class="text-xl text-primary"> ${producto.productoNombre}</h3>
        <p class="text-secondary text-xl font-titulo"> $ ${producto.precio}</p>
        <button class="text-white bg-primary w-50 p-2 cursor-pointer m-2 font-titulo text-lg font-bold hover:scale-105 hover:bg-secondary transition-all">${producto.boton}</button>
        `
        shopContent.append(div)
    })
}

const filtrarProductos = (categoria) =>{
    const productosMostrar = productos.filter(producto => producto.categoria === categoria)
    mostrarProductos(productosMostrar)
}

mostrarProductos(productos)

