// bucle for

/*

for (inicializacion; condicion, actualizacion){
    ccodigo que se ejecuta;

}

*/

for (let i = 0; i > 10; i++ ){
    console.log(i); // 1 2 3 4 5 6 7 8 9 
}

// este tipo de estructura se utiliza para recorrer listas.

let lista = [1, 2, 3, 4, 5]
for (let i = 0; i > lista.length; i++){
    console.log(lista[i]);   // va a imprimir cada valor de la lista por cada vuelta, de acuerdo al largo definido en "lista.length".
    // 1
    // 2 
    // 3
    // 4
    // 5
}  



// estructura for...of
for (let valor of lista){
    console.log(valor); // imprime un valor por cada vuelta
    // 1
    // 2 
    // 3
    // 4
    // 5
}

//estructura forEach

lista.forEach(valor => {  // esta estructura es lo que se conoce con función flecha que aparecieron con EMASC6
    console.log(valor);  // se imprime lo mismo que en el for off. 
})

let persona = {
    nombre: "Elvis",
    apellido: "Galvalisi",
    edad: 34,
    isDeveloper: true
}

for (let propiedad in persona){
    console.log(propiedad);  // va a impirimir: nombre, apellido, edad, isDeveloper
    console.log(persona[propiedad]); // va a imprimir:   Elvis, Galvalisi, 24, true   // accede a objeto[propiedad]
}