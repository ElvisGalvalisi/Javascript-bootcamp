// operador .valueOf() - obtener valores numéricos a partir de literales.

let a = 2;
let b = new Number(3);

console.log(a); // 2
console.log(b);  // Number 3 {}


console.log(b.valueOf());  // 3 

let str = new String("Hola");  // imprime: 0: 'h', 1:'o', 2:'l', 3:'a'
console.log(str.valueOf()); // Hola 


// NaN (Not a Number) - Infnity

let n = Number('adios');
console.log(n);  // NaN    --> devuelve NaN porque lo que se intenta mostrar no es un número.
console.log(isNaN(n)); // devuelve True


let numerador = 19;
let divisor = 2;
console.log(numerador / divisor);  // 9.5

divisor = 0;
console.log(numerador / divisor);  // infinty   


// como convertir los strings a valores numéricos con Number, parseInt y parseFloat
let nro = '5.89';
console.log(typeof nro);   // string

let nro2 = 17.2;
console.log(nro + nro2); //Error de concepto  
// 5.8917.2   --> se concatena el valor primero como el segundo.

console.log(Number(nro) + nro2 ); // 23.09  el operador Number castea el valor de nro mientras sea legible.

console.log(parseInt(nro));  // 5  número entero
console.log(parseFloat(nro)); // 5.89    número flotante o con coma.


// Números hexadecimales (base 16)
let numHex = '0x3a5b7';  //los números decimales no son flotantes.

console.log(parseInt(numHex)); // 239031
console.log(parseInt(numHex, 16)); //  239031   --el segundo parámetro indica la base.
console.log(parseInt(numHex, 0)); //  0
console.log(parseInt(numHex, 10)); //  0    ---> es 0 por la x, no toma en cuenta los otros nros.


// obtener valores máximos y mínimos en Javascript
//EPSILON es la mínima diferencia que puede haber entre un número y el siguiente.
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE; // no es un método, sino una propiedad por eso va sin ()
let max_valor_JS = Number.MAX_VALUE;


console.log(min_precision); // 2.220446049250313e-16  mínimo valor con el que se puede trabajar en JS

console.log(min_valor_JS); // 5e-324
console.log(max_valor_JS); //1.7976931348623157e+308
