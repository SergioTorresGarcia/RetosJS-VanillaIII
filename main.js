
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
let word = "photography"

if (word.length >= 5) {
        console.log(`${word.trim()} tiene 5 o más caracteres`)
    } else {
        console.log(`${word.trim()} tiene menos de 5 caracteres`)
    }