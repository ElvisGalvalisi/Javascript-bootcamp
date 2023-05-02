// métodos de cadenas de textos
//case sensitive

let input = "Sagiario";
let db= "sagitario";

console.log(input === db);  // false 


// toLowerCase
console.log(input.toLowerCase() === db.toLowerCase());  // true   // compara los strings todo en minúsculas 


//toUpperCase

console.log(input.toUpperCase() === db.toUpperCase());  // true   // compara los strings todo en mayúsculas 



// formas de contatenar cadenas

let str_1 = "soy la primer cadena";
let str_2 = "y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2)); //imprime: soy la primer cadena y yo soy la segunda cadena

console.log(str_1 +" "+str_2); //imprime: soy la primer cadena y yo soy la segunda cadena

console.log(`${str_1} ${str_2}`);  //imprime: soy la primer cadena y yo soy la segunda cadena

// eliminar espacios al inicio y al final.
let str_3 = "    Hola soy una string con espacios al final.   ";
console.log(str_3.length); //imprime: 48

console.log(str_3.trim().length); //imprime: 41     elimina los espacios del principio y final.

console.log(str_3.trimStart().length) //imprime: 44     elimina los espacios del inicio.

console.log(str_3.trimEnd().length) //imprime: 45     elimina los espacios del final.


// obtener el caracter que hay en cierta posición

let str_4 = "hola soy el string número 4";    
console.log(str_4.charAt(0))  //imprime: h
console.log(str_4.charAt(1))  //imprime: o
console.log(str_4.charAt(2))  //imprime: l
console.log(str_4.charAt(3))  //imprime: a
console.log(str_4.charAt(4))  //imprime: (espacio)
console.log(str_4.charAt(5))  //imprime: s

// se puede tratar como una lista tambien: ["h", "o", "l", "a", " ", "s"]
console.log(str_4[5])  // imprime s


// obtener la posición de una palabra en una cadena de texto.

let str_5 = "Hola soy Elvis y me gusta el surf. Mi nombre es Elvis y mi apellido Galvalisi";
console.log(str_5.indexOf("Elvis")) // imprime:  9 (es la posición desde donde inicia la palabra buscada en la primera instancia)
console.log(str_5.charAt(9)) // imprime: E
console.log(str_5.lastIndexOf("Elvis"))  //imprime:  48 (es la posición desde donde inicia la palabra buscada en la segunda instancia)
console.log(str_5.indexOf("Elbis")) // imprime:  -1  (si encuentra la palabra buscada imprime -1)

