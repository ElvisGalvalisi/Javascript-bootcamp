// métodos utilizados con cadenas de caracteres

//como obtener la longitud

let str = "Hola soy un string";
console.log(str);  // imprime 18


// obtener partes de cadenas de caracteres
// slice()   substring()  substr()

let slice_str = str.slice(5,10);  // se pasa el parametro de inicio y final.
console.log(slice_str);   // imprime:   soy u

let substring_str = str.substring(5, 10)    // se pasa el parametro de inicio y final.
console.log(substring_str);   // imprime: soy u

let substr_str = str.substr(); // se pasa por parámetro el inicio y la longitud del string DEPRECATED - OBSOLETO
console.log(substr_str);  // imprime: soy un str


/// reemplazar parte del contenido de una cadena

let cadena = "Hola mi nombre es Elvis"
console.log(cadena); //imprime:  Hola mi nombre es Elvis

// al utilizar string solo reemplaza la primer instancia
console.log(cadena.replace('Elvis', 'Fabián')) // imprime: Hola mi nombre es Fabián    // se pasa el primer parámetro a remplazar y luego el valor nuevo.

// al utilizar la expresión regular /g (global) reemplaza todas las intancias.
let texto_largo= "Esto es un texto, pero si no fuera un texto sería otro texto, o sino sería algo que no es un texto. "
console.log(texto_largo.replace(/texto/g, "libro"))   // reemplazaría texto por libro en todas las instancias.

// imprime: Esto es un libro, pero si no fuera un libro sería otro libro, o sino sería algo que no es un libro.
