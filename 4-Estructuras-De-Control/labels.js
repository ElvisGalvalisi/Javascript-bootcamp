//labels para nombrar bucles y utlizar break y continue

let unidades =0;
let decenas =0;

bucleDecenas:while(true){
    console.log(`El número actual es:  ${decenas}${unidades}`); // va a imprimir del 00 al 20, en el 10 hace el break para aumentar las decenas.
    bucleUnidades: while(true){ 
        unidades ++;
        if (unidades === 10){
            unidades = 0;
            break bucleUnidades;
        }
    }
    
    if (decenas === 2){
        console.log(`El número actual es:  ${decenas}${unidades}`); // imprime 20
        break bucleDecenas;

    }
    decenas ++;
}
