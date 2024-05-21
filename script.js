let carrito = [];

function agregarProducto(imagen, nombre, precio) {
    carrito.push({imagen, nombre, precio});
    actualizarCarrito();
}



function actualizarCarrito() {
    const listaProductos = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];
    const totalPrecio = document.getElementById('totalPrecio');
    const cantidadProductos = document.getElementById('cantidadProductos');

    listaProductos.innerHTML = '';

    let total = 0;
    carrito.forEach((producto, index) => {
        const fila = document.createElement('tr');
        const imagenColumna = document.createElement('td');
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagenColumna.appendChild(imagen);

        const nombreColumna = document.createElement('td');
        nombreColumna.textContent = producto.nombre;

        const precioColumna = document.createElement('td');
        precioColumna.textContent = `$${producto.precio}`;

        const eliminarColumna = document.createElement('td');
        const eliminarBoton = document.createElement('button');
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.addEventListener('click', () => eliminarProducto(index));
        eliminarColumna.appendChild(eliminarBoton);

        fila.appendChild(imagenColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(precioColumna);
        fila.appendChild(eliminarColumna);

        listaProductos.appendChild(fila);

        total += Number(producto.precio);
    });

    totalPrecio.textContent = `Total: $${total}`;
    cantidadProductos.textContent = `Cantidad de productos: ${carrito.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const agregarCarritoBotones = document.getElementsByClassName('agregar-carrito');
    Array.from(agregarCarritoBotones).forEach(boton => {
        boton.addEventListener('click', agregarProductoAlCarrito);
    });

    const vaciarCarritoBoton = document.getElementById('vaciar-carrito');
    vaciarCarritoBoton.addEventListener('click', vaciarCarrito);

    actualizarCarrito();
});

function agregarProductoAlCarrito(event) {
    event.preventDefault();
    const producto = event.target.parentElement;
    const imagen = producto.previousElementSibling.src;
    const nombre = producto.querySelector('h4').textContent;
    const precio = producto.querySelector('.precio').textContent.slice(1);

    agregarProducto(imagen, nombre, precio);
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function Pagar() {
    carrito = []
    window.location.href = "IraPagar.html";
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function irARegistro() {
    window.location.href = "registro.html";
}

function irAContacto() {
    window.location.href = "contacto.html";
}

function irAProductos() {
    window.location.href = "productos.html";
}

function irANosotros() {
    window.location.href = "nosotros.html";
}

function irAIniciarSesion() {
    window.location.href = "iniciar sesion.html";
}

function irAOlvidoContrasena() {
    window.location.href = "ruta_de_tu_pagina_de_olvido_contrasena.html";
}

function irACrearCuenta() {
    window.location.href = "ruta_de_tu_pagina_de_crear_cuenta.html";
}
const pseToggle = document.getElementById('pse-toggle');
const pseForm = document.getElementById('pse-form');
const efectyToggle = document.getElementByI

const orderLinks = document.querySelectorAll('.order-link');
const detallesContainer = document.querySelector('.details-container');

orderLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const orderNumber = event.target.textContent.split('#')[1].trim();
    const fecha = '01/01/2024';
    const numero = orderNumber;
    const estado = 'Finalizado';
    const observaciones = 'N/A';
    const total = '50,000 COP';

    document.getElementById('fecha').textContent = fecha;
    document.getElementById('numero').textContent = numero;
    document.getElementById('estado').textContent = estado;
    document.getElementById('observaciones').textContent = observaciones;
    document.getElementById('total').textContent = total;
  });
});