//listas, arrays o arreglo

const lista = [ 1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3= new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4=[lista,lista2, lista3];

console.log(lista);  // [1, "hola", true, undefined, null]
console.log(lista2); //[2, "hola", true, undefined, null]
console.log(lista3); //['soy el primer elemento, index 0', , ]    se muestran los espacios del array sin los valores
console.log(lista4); // [ [1, "hola", true, undefined, null], [2, "hola", true, undefined, null], ['soy el primer elemento, index 0', , ] ]


//objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }

}

//para acceder:
console.log(movil.tarjeta); // {marca: 'Sandisk', almacenamiento:32 }   se accede al objeto 'tarjeta'.
console.log(movil.tarjeta.marca); // Sandisk   se accede al objeto 'tarjeta' y la propiedad 'marca'.




const objeto = {
    clave: "valor",
    clave2: 1,
    clave3: false,
    clave4: ["valor1", 4, false],
    clave5:{
        subClave5: 5,
        subClave5a: "una propiedad", 

    }
}

// para acceder a los objetos se coloca el nombre del objeto, el . y la propiedad.

// en este caso se creó un objeto const donde solo el nombre del objeto es constante,
// los pares clave:valor se pueden modificar. 


// fechas

//librerías de apoyo: Moments.js

const ahora = new Date();
consolole.log(ahora); //Mon May 01 2023 15:21:00 GMT+....(hora de la región) 


const fecha_milis = new Date(10); // nos va a mostrar los milisegundos de la fecha 0 ('01/01/1970')


const fecha_cadena= new Date("May 1 2023"); //nos muestra la fecha:    Mon May 01 2023 15:21:00 GMT+....(hora de la región) --> no se utiliza casi.

const fecha_valores = new Date(2023, 4, 01); // los meses empiezan desde el 0, enero es 0, febrero 1, marzo 2 (como se cuenta en los arrays).

const dia = ahora.getDate();
const mes = ahora.getMonth + 1; 
const anio = ahora.getFullYear(); 

console.log(dia, mes, anio); // 1 5 2023  

