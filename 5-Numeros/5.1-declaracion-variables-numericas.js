//numbers

//enteros
let a = 5;
console.log(a);  //imprime 5


//decimales
let b = 0.1;  
console.log(b) //imprime 0.1

//precisión
let c = 0.2;
console.log(b + c); //imprime 0.30000000000000004   --> esto sucede por como está guardado en memoria en bites y como lo trata javascript.

//pequeño truco para obtener valores reales
console.log(Math.round((0.1 + 0.2) * 100)/100); //imprime 0.3



