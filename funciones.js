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

const vocales = ["a", "e", "i", "o", "u"]
const QueLetraEs = (letra) => {
    switch (letra.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log(`la letra "${letra}" es una vocal`)
            break
        default:
            console.log(`la letra "${letra}" es una consonante`)
            break
    }
}
QueLetraEs("b")


// 7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.

// 8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

// 9. Crea una función que, dado un array de números, devuelva el número más grande del mismo.

// 10. Crea una función que, dado un array de números, devuelva la suma de todos los números que contiene.

// 11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un número(A).