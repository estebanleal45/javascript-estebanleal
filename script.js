let nom = "Juan Esteban Leal";
let edad ="18";
let ciu ="Garzón-Huila";
console.log(" Mi nombre es " + nom + ", tengo " + edad + " años y vivo en " + ciu);

/*Crea una variable llamada precio y asignale un valor decimal. 
Luego crea otra variable llamada cantidad y asignale un valor entero. 
Muestra el tipode dato de cada variable en la consola.*/


let precio = 3.14;
let cantidad =5;
console.log(typeof precio); // imprime en la consola
document.write (typeof cantidad); // imprime en el navegador
alert (typeof cantidad); // imprime en una ventana emergente

// Ejercicio 1: Cálculo de precio con descuento

function calcularPrecioFinal(precioOriginal) {
    const descuento = 0.25;
    return precioOriginal * (1 - descuento);
}

let precioCliente = parseFloat(prompt("Ingrese el precio del producto:"));
console.log("El total a pagar con descuento es: " + calcularPrecioFinal(precioCliente));

// Ejercicio 2: Interés bancario
function calcularGanancia(capital, tasa) {
    return capital * tasa;
}

let montoInvertido = parseFloat(prompt("Ingrese el monto a invertir:"));
console.log("Ganancia en un mes: " + calcularGanancia(montoInvertido, 0.02));

// Ejercicio 3: Cálculo de calificación final
function calcularNotaFinal(notas, examen, trabajo) {
    let promedioNotas = (notas.reduce((a, b) => a + b, 0)) / notas.length;
    return (promedioNotas * 0.55) + (examen * 0.30) + (trabajo * 0.15);
}

let notas = [parseFloat(prompt("Nota 1:")), parseFloat(prompt("Nota 2:")), parseFloat(prompt("Nota 3:"))];
let examenFinal = parseFloat(prompt("Ingrese nota del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingrese nota del trabajo final:"));
console.log("Nota final: " + calcularNotaFinal(notas, examenFinal, trabajoFinal));

// Ejercicio 4: Precio de venta con ganancia
function calcularPrecioVenta(precioCompra, ganancia) {
    return precioCompra * (1 + ganancia);
}

let costoProducto = parseFloat(prompt("Ingrese el costo del producto:"));
console.log("Precio de venta: " + calcularPrecioVenta(costoProducto, 0.30));

// Ejercicio 5: Cálculo del costo de un viaje en taxi
function calcularCostoTaxi(km, min) {
    return (km * 15000) + (min * 2000);
}

let kmRecorridos = parseFloat(prompt("Kilómetros recorridos:"));
let tiempoViaje = parseFloat(prompt("Minutos de viaje:"));
console.log("Costo total del viaje: " + calcularCostoTaxi(kmRecorridos, tiempoViaje));

// Ejercicio 6: Cálculo de cuadrados
let numeros = [parseFloat(prompt("Ingrese número 1:")), parseFloat(prompt("Ingrese número 2:")), parseFloat(prompt("Ingrese número 3:"))];
numeros.forEach(num => console.log("El cuadrado de " + num + " es: " + (num ** 2)));

// Ejercicio 7: Distribución de presupuesto hospitalario
function calcularPresupuesto(total) {
    return {
        ginecologia: total * 0.40,
        traumatologia: total * 0.30,
        pediatria: total * 0.30
    };
}

let presupuesto = parseFloat(prompt("Ingrese el presupuesto anual del hospital:"));
let distribucion = calcularPresupuesto(presupuesto);
console.log("Presupuesto - Ginecología: " + distribucion.ginecologia + ", Traumatología: " + distribucion.traumatologia + ", Pediatría: " + distribucion.pediatria);

// Ejercicio 8: Precio de venta con ganancia (repetido del ejercicio 4, usando otra forma)
let costo = parseFloat(prompt("Ingrese el costo del artículo:"));
console.log(`El precio de venta será: ${(costo * 1.30).toFixed(2)}`);

// Ejercicio 9: Cálculo de inversión en una empresa
let inversiones = [parseFloat(prompt("Inversión persona 1:")), parseFloat(prompt("Inversión persona 2:")), parseFloat(prompt("Inversión persona 3:"))];
let totalInvertido = inversiones.reduce((a, b) => a + b, 0);
inversiones.forEach((inv, index) => console.log(`Persona ${index + 1}: ${(inv / totalInvertido * 100).toFixed(2)}% de la inversión`));

// Ejercicio 10: Calculadora básica
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let resultado;

switch (operacion) {
    case '+': resultado = num1 + num2; break;
    case '-': resultado = num1 - num2; break;
    case '*': resultado = num1 * num2; break;
    case '/': resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero"; break;
    default: resultado = "Operación no válida";
}
console.log("El resultado es: " + resultado);

