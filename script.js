

// ESTRUCTURAS DE CONTROL
// EJEMPLO 1 - DECLARAR DOS VARIABLES UNA QUE SEA EL NOMBRE Y LA OTRA LA EDAD, MOSTRAR SI ES MAYOR DE EDAD

//el usuario digite nombre y edad con la siguiente estructura de verificacion

/*
1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));

if (edad <= 18) {
    alert("Hola: " + nombre + " eres joven");
}else if (edad <= 40 ) {
    alert("Hola: " + nombre + " eres adulto");
}else if (edad <= 60 ) {
    alert("Hola: " + nombre + " eres maduro");
}else{
    alert("Hola: " + nombre + " eres anciano");
}


// CICLO WHILE

//DECLARAR UNA VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A 0

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  document.write(cuentaAtras + "<br>")

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    document.write(revisionesRealizadas + ' revisiones realizadas...' + "<br>")
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}
  */


// DO WHILE

/* Imprimir 5 edades de diferentes personas y determinar si son mayores de edad

let N_personas = 0;

do {
    let nombre2 = prompt("Ingrese su nombre");
    let edad2 = parseInt(prompt("Ingrese su edad"));

    if (edad2 >= 18) {
        alert("Hola " + nombre2 + ", es mayor de edad");
    } else {
        alert("Hola " + nombre2 + ", es menor de edad");
    }

    N_personas++; 
} while (N_personas < 5);
*/


// FOR
/*Imprimir las tablas de multiplicar del numero que el usuario digite hasta el numero 10, 
utilizando el ciclo for y mostrar en pantalla la siguiente sintaxis
ejemplo:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

*/

/*let numero = parseInt(prompt("Ingresa un número para mostrar su tabla "));

if (!isNaN(numero)) {
  let mensaje = `Tabla del ${numero}:\n\n`;

  for (let i = 1; i <= 10; i++) {
    mensaje += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(mensaje);
} else {
  alert("Por favor, ingresa un número válido.");
}
  */


// SWITCH

// EJERCICIO 1: 
/*Realizar un programa que determine que dia de la semana corresponde 
hoy, ingresando o utilizando la funcion prompt


const dia=new Date().getDay();
switch (dia) {
  case 1:
    console.log("¡Hoy es lunes formacion con gonzalo! 😢")
    break

    case 2:
    console.log("¡Hoy es martes formacion con jesus silva! 😢")
    break

    case 3:
    console.log("¡Hoy es miercoless formacion con gonzalo! 😢")
    break

    case 4:
    console.log("¡Hoy es jueves formacion con emerson! 😢")
    break

    case 5:
    console.log("¡Hoy es viernes formacion con jesus silva! 😢")
    break

    case 6:
    console.log("¡Hoy es sabado de descanso! 😢")
    break

    case 0:
    console.log("¡Hoy es domingo de descanso! 😢")
    break

  default:
    console.log("No corresponde al dia de la semana! 🚀")
    break
}
    */

// EJERCICIO 2:
/*utilizando la etructura switch realizar el siguiente ejercicio:

el usuario digite nombre y edad con la siguiente verificacion
1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano


let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"), 10);
if (isNaN(edad) || edad < 1) {
  console.log("Edad no válida. Debe ingresar un número mayor a 0.");
} else {
  let categoria;
switch (true) {
  case (edad >= 1 && edad <= 18):
      categoria = "joven";
      break;
  case (edad >= 19 && edad <= 40):
      categoria = "adulto";
      break;
  case (edad >= 41 && edad <= 60):
      categoria = "maduro";
      break;
  case (edad >= 61):
      categoria = "anciano";
      break;
  default:
      categoria = "desconocida";
}
console.log(`${nombre}, según tu edad (${edad} años), eres considerado ${categoria}.`);
}
*/