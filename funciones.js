// **Funciones**
// 1. Crea una función que convierta grados celsius a grados fahrenheit.

// const CelToFah = (C) => {
//     let F = (9/5 * C) + 32
//     return `${C}ºC = ${F.toFixed(2)}ºF`
// }
// console.log(CelToFah(37))


// 2. Crea una función que determine si un número es par o impar.

// const ParImpar = (num) => {
//     (num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`)
// }
// ParImpar(38)


// 3. Crea una función que determine si un número es primo o no.

// const EsPrimo = (num) => {

//     if (num === 1) {
//         return false
//     }
//     else if (num === 2) {
//         return true
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// EsPrimo(21) ? console.log(`SÍ es primo`) : console.log(`NO es primo`)



// 4. Crea una función que reciba un número de dni como parámetro, y devuelva la letra del mismo. Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI es [TRWAGMYFPDXBNJZSQVHLCKE].

// let arr = Array.from("TRWAGMYFPDXBNJZSQVHLCKE")
// const ComprobarDNI = (num) => {
//     let i = num % 23
//     let letra = arr[i]
//     let result = console.log(num, letra)
//     return result
// }

// console.log(ComprobarDNI(55433740))


// 5. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.

// const ConIva = (precio, iva = 21) => {
//     let total = precio + precio * iva/100
//     return console.log(`${precio} + iva(${iva}%) = ${total}`)
// }
// ConIva(150)
// ConIva(150, 8)

// 6. Crea una función que determine si una letra es una vocal o una consonante.

// const vocales = ["a", "e", "i", "o", "u"]
// const QueLetraEs = (letra) => {
//     switch (letra.toLowerCase()) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             console.log(`la letra "${letra}" es una vocal`)
//             break
//         default:
//             console.log(`la letra "${letra}" es una consonante`)
//             break
//     }
// }
// QueLetraEs("b")


// 7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.

// const Codigo = (frase) => {

//     let nueva = frase.replace("A", "4").replace("E", "3").replace("I", "1").replace("O", "0")
//     console.log(nueva)
// }
// Codigo("Arbol Enano Interesa Oso")


// 8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

// let count = 0
// const ContarLetras = (frase, letra) => {
//     let arr = Array.from(frase.toLowerCase())
//     for(ch of arr) {
//         if (ch === letra) {
//             count++
//         }
//     }

//     return console.log(`There are ${count} "${letra}" in "${frase}"`)
// }
// ContarLetras("Javascript is not very strict", "r")

// 9. Crea una función que, dado un array de números, devuelva el número más grande del mismo.

// const OrderArray = (arr) => {
//     return console.log(arr.sort((a, b) => a - b).slice(-1))
// }
// OrderArray([3, 7, 2, 35, 24])

// 10. Crea una función que, dado un array de números, devuelva la suma de todos los números que contiene.

// const SumArray = (arr) => {
//     let total = 0
//     arr.map(el => total += el)
//     return console.log("La suma total de los elementos es",total)
// }
// SumArray([3, 7, 2, 35, 24])


// 11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un número(A).

const Porcentaje = (A, B) => {
    let p = A * B / 100
    return console.log(`El ${B}% de ${A} es ${p.toFixed(2)}`)
}
Porcentaje(50, 17.35)
