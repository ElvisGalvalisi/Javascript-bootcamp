// bucle while

/*
while(condicion){
    bloque de código;
}

*/

let i=0;
let max=5;

while (i < max){
    console.log(i);  // 0, 1, 2, 3, 4 
    i++; //no olvidarse nunca el contador para que no quede infinito el bucle.
}

// do..while

/*

do {

} while (condicion);

*/ 
i=0;

do{
    console.log("en el do siempre se va a ejecutar el primer bloque de código")
    i++;
} while(i < max);