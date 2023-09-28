
//Ejercicio 1

function cuentaLetras(sentence, letra) {             //declaro una función con los parámetros que voy a usar
    let contador = 0                                //creo una variable que se llama "contador" para poder sumar las letras que se vayan repitiendo
    for (let i = 0; i < sentence.length; i++) {     //hago un bucle for y pongo de condición que cada que vez que la i sea igual a la letra introducida, el contador sume 1.
       if(sentence[i] === letra) {
        contador++; 
       }
    }
    
    return contador                             //le pido que me duelva el número contador con el incremento por cada letra coincidente
}
    
}                                               //no consigo 




//Ejercicio 2

let numeroIntroducido = parseInt(prompt("¡Hola! Ingresa un número para saber si es impar :)")); // Declaro la variable "Numero introducido" y con prompt solicito al usuario que introduzca un número

let contadorImpares = 0

if ((numeroIntroducido % 2 !== 0) && (contadorImpares <= (numeroIntroducido + 50))) {

    contadorImpares++;                                                                             //Intento poner un condicional en el que especifico que si el número es impar (% 2 !== 0) y está dentro de los siguientes 50, contador sume 1 cada vez.
                                                                            
}
console.log(contadorImpares)