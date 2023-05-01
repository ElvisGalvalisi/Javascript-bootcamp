 // casos muy específicos - break, continue

 let lista = [1, 2, 3, 4, 5, 6, 7, 8];

 for (let i =0; i< lista.length; i++){
    console.log(lista[i]);  // imprime 1, 2, 3, 4, 5, 6, 7, 8
 }

 for (let i =0; i< lista.length; i++){

    console.log(lista[i]);  // imprime 1, 2, 3, 4, 5, 6  // cuando la variable i es = a 6, hace el break.

    if(lista[i]>5){
        break;
    }
 }

 for (let i =0; i< lista.length; i++){
    
    if(lista[i] === 3){
        continue;  // sería como un volver arriba.   Se utilzia en casos muy excepcionales.
        
    }

    console.log(lista[i]);  // imprime 1, 2, 4, 5, 6  
    // cuando la variable i = 3, no la imprime porque entra en la condicion
    // vuelve el bucle al for y continua el código  imprimiendo 4, y así hasta la condicion break.

    if(lista[i]>5){
        break;
    }
 }
 

 //cual es el ámbito de un bucle
 // para los bucles en mejor utilizar LET para definir las variables a nivel bucle.

 // declarando VAR o CONST se puede tener problemas y no es una buena práctica. 