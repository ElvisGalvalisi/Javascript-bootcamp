// principales operaciones aritméticas

let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b) // 8.3

//resta (-)
console.log(a - b); // -1.2999999999999998

//multiplicación (*) 
console.log(a * b);  //16.8

//división (/)
console.log(a / b);  // 0.72916666666666667

// representación de los números en cadenas de textos.
console.log(typeof a ) //number

let a_s = a.toString();
console.log(typeof a_s); //string 


// redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d)   //9.89999999999999999999

//.toFixed(x)  - limitar el número de decimales al valor x
console.log(d.toFixed(0)) // 10
console.log(d.toFixed(1)) // 9.9
console.log(d.toFixed(2)) // 9.90
console.log(d.toFixed(3)) // 9.900    el resultado obtenido es un STRING. 

let e = 1839.1232456789;
console.log(e.toFixed(2)); // 1839.12

let f = 2213556153215;
console.log(f.toFixed(2)); // 2213556153215.00
//.toPrecision(x) - cifras significativas
console.log(e.toPrecision(4))  // 1839
console.log(e.toPrecision(7))  // 1839.123

console.log(f.toPrecision(7))  //2.213556e+12    significa 2.213556 * 10 elevado a la 12  

console.log(typeof f.toPrecision(3))  // devuelve un STRING



