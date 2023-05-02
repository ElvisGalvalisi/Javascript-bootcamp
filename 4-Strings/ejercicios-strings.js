//Ejercicos Strings

// Una cadena de texto con tu Nombre
let nombre = "Elvis";
console.log(nombre); 

//- Otra cadena de texto con tu Apellido
let apellido = "Galvalisi";
console.log(apellido)

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase(); 
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numLetras = estudiante.trim().length;
console.log(`cantidad de letras: ${numLetras}`);

//- Una variable que contenga la primera letra del Nombre
let primerLetra = nombre[0];  //como lista
let primeraLetra2 = nombre.charAt(0);  //con función
console.log(primerLetra);
console.log(primeraLetra2);

//- Otra variable que contenga la última letra del Apellido
let largo = apellido.length;  //se obtiene el largo del apellido
let ultLetApe = apellido.charAt(largo-1); // se resta 1 para obtener la última posición del largo teniendo en cuenta que arranca en 0
let ultApe = apellido[largo-1]; 

//console.log(`largo: ${largo}`)
console.log(`ult: ${ultLetApe}`);
console.log(`ultA: ${ultApe}`);


//- Una cadena de texto que elimine los espacios de la variable "estudiante"

let delEspacios = estudiante.replace(" ", "");
console.log(delEspacios);


//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let contenido = estudiante.includes(`${nombre}`);
console.log(contenido);