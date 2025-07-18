// funciones.js (versión corregida y modularizada)
function suma(a, b) {
    return a + b;
}

function esPar(numero) {
    return numero % 2 === 0; // ← debía ser === 0
}

function dividir(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

function obtenerIniciales(nombreCompleto) {
    const partes = nombreCompleto.split(" ");
    return partes.map(p => p[0]).join("");
}

function formatearFecha(fechaStr) {
    const partes = fechaStr.split("-");
    if (partes.length !== 3) return "Formato inválido";
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

module.exports = { suma, esPar, dividir, obtenerIniciales, formatearFecha };