const productos = [
    {
        productoNombre: "Ditulan",
        precio: 30,
        img: "https://lafarmascota.com/wp-content/uploads/2020/05/dirulan.jpg",
        categoria: "diuretico"
    },
    {
        productoNombre: "Nexgard Spectra",
        precio: 100,
        img: "https://lafarmascota.com/wp-content/uploads/2020/09/nexgard-spectra-1-tableta-400x400.png",
        categoria: "desparacitante"
    },
    {
        productoNombre: "Feline Fullspot",
        precio: 150,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/fullspot-400x400.jpg",
        categoria: "desparacitante"
    },
        {
        productoNombre: "Amoxicilina y Ácido Clavulánico Spectrum",
        precio: 67,
        img: "https://lafarmascota.com/wp-content/uploads/2021/12/amoxicilina-acido-clavulanico-spectrum-400x400.jpg",
        categoria: "antibiotico"
    },
    {
        productoNombre: "Doxiciclina para perros Spectrum",
        precio: 85,
        img: "https://lafarmascota.com/wp-content/uploads/2024/01/doxicilina-400x400.jpg",
        categoria: "antibiotico"
    },
    {
        productoNombre: "Leidofs (gabapentina) 100 y 400 mg",
        precio: 100,
        img: "https://lafarmascota.com/wp-content/uploads/2021/08/leidofs400-400x400.jpg",
        categoria: "analgesico"
    },
    {
        productoNombre: "Tramadol Pets",
        precio: 50,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/tramadol-para-perros-400x400.jpg",
        categoria: "analgesico"
    },
    {
        productoNombre: "Relaxicam Tabletas",
        precio: 67,
        img: "https://lafarmascota.com/wp-content/uploads/2024/01/relaxicam-tabletas-400x400.jpg",
        categoria: "analgesico"
    },
    {
        productoNombre: "Cortipet",
        precio: 299,
        img: "https://lafarmascota.com/wp-content/uploads/2022/06/cortipet-5mg-400x400.jpg",
        categoria: "antiinflamatorio"
    },
    {
        productoNombre: "Relaxicam suspensión oral",
        precio: 99,
        img: "https://lafarmascota.com/wp-content/uploads/2023/12/relaxicam-suspension-oral-400x400.jpg",
        categoria: "antiinflamatorio"
    },
    {
        productoNombre: "Predni Pets",
        precio: 199,
        img: "https://lafarmascota.com/wp-content/uploads/2020/06/predni-pets-l-400x400.jpg",
        categoria: "antiinflamatorio"
    },
]

const mostrarProductos = () => {
    const shopContent = document.getElementById("shopContent");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "bg-white text-center m-2 p-2";
        div.innerHTML = `
        <img src="${producto.img}" class="w-full" alt="medicina">
        <h3 class="text-xl text-primary"> ${producto.productoNombre}</h3>
        <p class="text-secondary text-xl font-titulo"> $ ${producto.precio}</p>
        `
        shopContent.append(div)
    })
}

mostrarProductos()