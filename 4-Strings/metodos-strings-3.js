// métodos de cadenas parte 3

// pagina para ver:   https://regexr.com/

let texto_largo= "Esto es un texto, pero si no fuera un texto sería otro texto, o sino sería algo que no es un texto. "

console.log(texto_largo.match(/texto/g)) // imprime:  ['texto', 'texto', 'texto', 'texto']  
// se muestra una lista con la cantida de veces que encontró la palabra buscada. 
// Puede estar contenida dentro de una palabra. pretexto, hipertexto, 

// comprobar si la palbra esta en la cadena
console.log(texto_largo.includes("pero"))  //imrprime: true  (porque se encuentra la palabra en la cadena.)

console.log(texto_largo.includes("Auto"))  //imrprime: false


// Saber si un texto empieza por una palabra
console.log(texto_largo.startsWith("planta"));  // false
console.log(texto_largo.startsWith("e"));  // false   (case Sensitive)

console.log(texto_largo.startsWith("Esto"));  // true
console.log(texto_largo.startsWith("Est"));  // true
console.log(texto_largo.startsWith("Es"));  // true
console.log(texto_largo.startsWith("E"));  // true
console.log(texto_largo.startsWith("Esto es un texto, "));  // true 


// saber si un texto termina con una palabra
console.log(texto_largo.endsWith("."))  //true
console.log(texto_largo.endsWith(" texto. "))  //true

console.log(texto_largo.endsWith("t."))  //false
