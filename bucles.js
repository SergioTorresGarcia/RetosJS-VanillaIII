// **Bucles**
// 1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

// let num = 5
// let lista = []
// for (let i = 0; i<=num; i++) {
//     lista.push(i)

// }
// console.log(lista.join(","))

// 2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el usuario. El usuario también ha de proporcionar N.

// let N = parseInt(3)
// let M = parseInt(34)

// for (i = 0; i <= M; i = i + 3) {
//     console.log(i)
// }

// 3. Genera una lista con todos los números pares positivos por debajo del número tecleado por el usuario.

// let limite = parseInt(10)

// for (i = 2; i < limite; i++) {
//     (i % 2 == 0) ? console.log(i) : false
// }

// 4. Escribe la tabla de multiplicar de un número introducido por el usuario.

// let num = 7

// for (i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num*i}`)
// }

// 5. Formar un triángulo de este estilo con la cantidad de líneas que indique el usuario.

// let num = 5
// for (i = 0; i < num; i++) {
//     lista=""
//     for (j = 0; i >= j; j++) {
//         lista += "*"
//     }
//     console.log(lista)
// }

// 6. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.

// let num = 5

// let total = 0
// for(let i=0; i<=num; i++){
//     total += i
// }
// console.log(total)

// 7. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de números).

// let num1 = parseInt(5)
// let num2 = parseInt(6)
// let num3 = parseInt(2)
// let num4 = parseInt(8)
// let media = (num1+num2+num3+num4)/4
// console.log("la media aritmética de esos números es:", media)

// 8. Saca por consola los números primos del 0 al número que introduzca un usuario por prompt.

// let num = 50

// for (let i = 2; i < num; i++) {
//     let prime = true
//     for (j = 2; j < i; j++) {
//         if (i % j === 0) {
//             prime = false
//             break
//         }
//     }
//     if (prime) {
//         console.log(i)
//     }
// }

// 9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
// Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa determine qué número es el mayor y cuente desde el mayor hasta el menor.

// a)
// let num = 15
// for (i = num; i>=0; i--) {
//     console.log(i)
// } 

// b)
// let num1 = 15
// let num2 = 5
// for (i = num1; i>= num2; i--){
//     console.log(i)
// }

// c)
// let num3 = 25
// let num4 = 15

// if(num3 > num4) {
//     for (i = num3; i>= num4; i--){
//         console.log(i)
//     }
// } else {
//     for (i = num4; i>= num3; i--){
//         console.log(i)
//     }
// }
//consultar si se puede con ternaria

// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga todos los resultados.

let num1 = parseInt(3)
let num2 = parseInt(45)
let num3 = parseInt(6)
let num4 = parseInt(87)
let num5 = parseInt(2)

let arr = [num1, num2, num3, num4, num5]
let arr2 = []
for (let num of arr) {
    console.log(`${num} x 3 = `, num*3)
    arr2.push(num*3)
}
console.log(arr2)