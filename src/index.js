/**
 * Punto de entrada del proyecto
 * Autor: ninjadiego
 */

function saludar(nombre = 'mundo') {
  return `¡Hola, ${nombre}! 👋`;
}

function main() {
  console.log(saludar('Diego'));
  console.log('🚀 Proyecto inicial corriendo correctamente.');
}

main();

module.exports = { saludar };
