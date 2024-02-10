
// 1. Pedir dos números y decir si son múltiplos o no.
let num1 = 60
let num2 = 15

if (num1 % num2 == 0) { 
    console.log(`${num1} es múltiplo de ${num2}`)
} else if (num2 % num1 == 0) { 
    console.log(`${num2} es múltiplo de ${num1}`)
} else {
    console.log("No son múltiplos")
}