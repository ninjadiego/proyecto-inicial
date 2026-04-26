// =============================================================================
// utils.js
// -----------------------------------------------------------------------------
// Conjunto de utilidades reutilizables para el proyecto.
// Funciones puras, sin efectos secundarios, faciles de probar.
// =============================================================================

/**
 * Capitaliza la primera letra de un string.
 * @param {string} str - cadena de entrada
 * @returns {string} cadena con la primera letra en mayuscula
 */
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Genera un numero entero aleatorio dentro de un rango (inclusivo).
 * @param {number} min - limite inferior
 * @param {number} max - limite superior
 * @returns {number} entero aleatorio entre min y max
 */
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Crea una version "debounced" de una funcion.
 * Util para limitar la frecuencia de ejecucion en eventos como input o resize.
 * @param {Function} fn - funcion a ejecutar
 * @param {number} delay - retraso en milisegundos
 * @returns {Function} funcion debounced
 */
function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Crea una version "throttled" de una funcion.
 * Garantiza que la funcion se ejecute como maximo una vez cada `limit` ms.
 * @param {Function} fn - funcion a ejecutar
 * @param {number} limit - intervalo minimo en milisegundos
 * @returns {Function} funcion throttled
 */
function throttle(fn, limit = 300) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Clona un objeto o array de forma profunda.
 * Maneja objetos planos, arrays y valores primitivos.
 * @param {*} value - valor a clonar
 * @returns {*} copia profunda
 */
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone);
  const result = {};
  for (const key of Object.keys(value)) {
    result[key] = deepClone(value[key]);
  }
  return result;
}

/**
 * Formatea un numero como moneda en euros.
 * @param {number} amount - cantidad a formatear
 * @param {string} locale - localizacion (por defecto es-ES)
 * @returns {string} cadena formateada
 */
function formatCurrency(amount, locale = "es-ES") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

/**
 * Comprueba si un valor es un objeto plano (no array, no null).
 * @param {*} value
 * @returns {boolean}
 */
function isPlainObject(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

module.exports = {
  capitalize,
  randomInt,
  debounce,
  throttle,
  deepClone,
  formatCurrency,
  isPlainObject,
};
