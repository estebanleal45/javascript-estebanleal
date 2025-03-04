

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

////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIOS JAVASCRIPT//

/* 1. Programa que dada la edad de una persona indique si es mayor o menor de
edad. Se considera mayor de edad a partir de los 18 años.*/

let edad2 = parseInt(prompt("Ingrese su edad"));

if (edad2 >= 18) {
    alert("Hola," + " eres mayor de edad");
} else {
    alert("Hola," + " eres menor de edad");}



/* 3. Dado dos números A y B, determinar si A es mayor, menor o igual que B.*/

let A = parseFloat(prompt("Ingrese el primer número (A):"));
let B = parseFloat(prompt("Ingrese el segundo número (B):"));

if (isNaN(A) || isNaN(B)) {
    alert("Error: Debe ingresar valores numéricos.");
} else {
   
    if (A > B) {
        alert("El número " + A + " es mayor que " + B);
    } else if (A < B) {
        alert("El número " + A + " es menor que " + B);
    } else {
        alert("El número " + A + " es igual a " + B);
    }
}
  


  /* 5. Dado el peso de una persona:*/

  let peso = parseInt(prompt("ingrese su peso"));

if (peso <= 40) {
    alert("Persona baja de peso");
}else if (peso <= 70) {
    alert("Persona peso promedio");
}else{
    alert("Persona con sobrepeso");
}

/* 7. En un almacén se hace un 20% de descuento a los clientes cuya compra
supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál
será la cantidad que pagara una persona por su compra?*/


let compra = prompt("Ingrese el valor de la compra:");

if (compra > 1000) {
    totalPagar = compra * 0.80; 
} else {
    totalPagar = compra * 0.95;
}
alert("El total a pagar después del descuento es: $" + totalPagar);


/* 9. Programa que lea los nombres y edades de dos personas e imprima cuál de
ellas tiene más edad.*/

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = Number(prompt("Ingrese la edad de " + nombre1 + ":"));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = Number(prompt("Ingrese la edad de " + nombre2 + ":"));

if (edad1 > edad2) {
  alert(nombre1 + " es mayor que " + nombre2);
} else if (edad2 > edad1) {
  alert(nombre2 + " es mayor que " + nombre1);
} else {
  alert(nombre1 + " y " + nombre2 + " tienen la misma edad.");
}



/* 11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor
que el segundo que los reste y si no que los sume.*/

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 === num2) {
  resultado = num1 * num2;
} else if (num1 > num2) {
  resultado = num1 - num2;
} else {
  resultado = num1 + num2;
}
alert("El resultado es: " + resultado);

 


/* 13.Escribe un programa que determine si un número ingresado por el usuario
es par o impar.*/

let numero = Number(prompt("Ingrese un numero"));
if (numero % 2===0) {
  alert("El numero " + numero + " es par.");
} else {
  alert("El numero " + numero + " es impar.");
}
  



/* 15.Crea un programa que solicite un número y verifique si es positivo, negativo
o igual a cero.*/

let numero = Number(prompt("Ingrese un numero"));
  if (numero > 0) {
    alert("el numero " + numero + " es positivo.");
  } else if (numero < 0) {
    alert("El numero " + numero + " es negativo");
  } else {
    alert("El numero es cero.")
  }



/* 17.Escribe un programa que permita al usuario seleccionar una figura
geométrica (triángulo y cuadrado) y luego calcule el área de esa figura
ingresando los datos necesarios para cada caso.*/

let figura = prompt("Seleccione una figura geométrica (triangulo o cuadrado):");

let area;

if (figura === "triangulo") {
    
    let base = Number(prompt("Ingrese la base del triangulo:"));
    let altura = Number(prompt("Ingrese la altura del triangulo:"));
    
    
    area = (base * altura) / 2;
    
   
    alert("El área del triangulo es: " + area);

} else if (figura === "cuadrado") {
    
    let lado = Number(prompt("Ingrese el lado del cuadrado:"));
    
    
    area = lado * lado;
    
   
    alert("El área del cuadrado es: " + area);

} else {
    alert("Opción no válida. Debe elegir entre 'triángulo' o 'cuadrado'.");
}


/* 19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si
el nombre es "admin" y la contraseña es "12345", muestra un mensaje de
acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.*/

let usuario = prompt("Ingrese su nombre de usuario:");
let contraseña = prompt("Ingrese su contraseña:");

if (usuario === "admin" && contraseña === "12345") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}
    



