const { suma, esPar, dividir, obtenerIniciales, formatearFecha } = require('../src/funciones.js');

// Sistema de pruebas personalizado
function test(descripcion, fn) {
  try {
    fn();
    console.log('✅ ' + descripcion);
  } catch (error) {
    console.error('❌ ' + descripcion);
    console.error('   ' + error.message);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Se esperaba ${expected}, pero se obtuvo ${actual}`);
      }
    }
  };
}

// Tus pruebas
test('Suma de 2 + 2 = 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('esPar con 4 = true', () => {
  expect(esPar(4)).toBe(true);
});

test('Dividir 10 / 2 = 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('Obtener iniciales "Juan Pérez" = "JP"', () => {
  expect(obtenerIniciales("Juan Pérez")).toBe("JP");
});

test('Formatear fecha "2025-07-04" = "04/07/2025"', () => {
  expect(formatearFecha("2025-07-04")).toBe("04/07/2025");
});
