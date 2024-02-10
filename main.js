
// 1. Pedir dos números y decir si son múltiplos o no.
// let num1 = 60
// let num2 = 15

// if (num1 % num2 == 0) { 
//     console.log(`${num1} es múltiplo de ${num2}`)
// } else if (num2 % num1 == 0) { 
//     console.log(`${num2} es múltiplo de ${num1}`)
// } else {
//     console.log("No son múltiplos")
// }

// 2. Pedir dos números y decir cual es el mayor.
// let num1 = 150
// let num2 = 150

// if (num1 < num2) { 
//     console.log(`${num1} es menor que ${num2}`)
// } else if (num1 > num2) { 
//     console.log(`${num1} es mayor que ${num2}`)
// } else {
//     console.log(`${num1} es igual a ${num2}`)
// }

// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.
// let num = parseInt(0)

// if (num > 0) {
//     console.log(`${num} es un número positivo`)
// } else if (num < 0) {
//     console.log(`${num} es un número negativo`)
// } else {
//     console.log(`${num} es cero`)
// }

// 4. Pedir un string y determinar si tiene cinco caracteres o más.
// let word = "photography"

// if (word.length >= 5) {
//         console.log(`${word.trim()} tiene 5 o más caracteres`)
//     } else {
//         console.log(`${word.trim()} tiene menos de 5 caracteres`)
//     }

// 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y determinar si el promedio es mayor que cinco.
// let num1 = parseInt(4)
// let num2 = parseInt(2)
// let num3 = parseInt(6)

// let media = parseFloat((num1+num2+num3)/3)
// console.log(`La media es ${(media)}`)
// console.log(`La media es ${(media > 5) ? "mayor" : "menor"} que 5`)

// 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let word = "Poland"

// if(word.toLowerCase() === word) {
//     console.log("todas sus letras son minúsculas")
// } else {
//     console.log("Una o más letras son mayúsculas")
// }

// 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el número.

// let num = Math.floor(Math.random() * 19 + 1)
// num % 2 == 0 ? console.log(`El número ${num} es par`) : console.log(`El número ${num} es impar`)

// 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado o no.

// let nota1 = parseFloat(6)
// let nota2 = parseFloat(8)
// let nota3 = parseFloat(4.5)

// let media = ( nota1 + nota2 + nota3 ) / 3
// media >= 5 ? console.log(`El alumno ha aprobado con una media de ${media.toFixed(1)}`) : console.log("El alumno está suspenso")

// 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
// El usuario introduce marca y modelo y el programa saca el descuento correspondiente por pantalla.

// let marca = "Ford"
// let model = "Focus"

// if (marca == "Ford" && model == "Fiesta") {
//     console.log("descuento es de un 5 %")
// } else if (marca == "Ford" && model == "Focus") {
//     console.log("descuento es de un 10 %")
// }

// 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el código responda cuántos días tiene ese mes.

// let numMes = 5

// switch (numMes) {
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`El mes ${numMes} tiene 30 dias`)
//         break;
//     case 2:
//         console.log("Febrero tiene 28 dias (o 29, cada 4 años)")
//         break;
//     default:
//         console.log(`El mes ${numMes} tiene 31 dias`)
// }

// 11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:

//     a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

//     b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

// let diametro = 1.90
// let grosor = 0.40
// //a)
// if (diametro > 1.4) {
//     console.log("La rueda es para un vehículo grande")
// } else if (0.8 < diametro && diametro <= 1.4) {
//     console.log("La rueda es para un vehículo mediano")
// } else {
//     console.log("La rueda es para un vehículo pequeño")
// }
// //b)
// if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
//     console.log("El grosor para esta rueda es inferior al recomendado")
// }

// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.

let precioKm
let vehiculo = "coche"  // "moto"  "autobus"
let kmRecorridos = parseFloat(56)

if (vehiculo === "coche") {
    precioKm = parseFloat(0.10)
} else if (vehiculo === "moto") {
    precioKm = parseFloat(0.20)
} else if (vehiculo === "autobus") {
    precioKm = parseFloat(0.50)
}
let total = (kmRecorridos * precioKm).toFixed(2)

console.log("Total a pagar:",total)