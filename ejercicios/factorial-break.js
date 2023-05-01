let num =1;
let fac =15;
let cont=1;

while (cont < fac){
    num *= cont;
    cont++; 
    
    if(num === 3628800){
        console.log(`Entro en la sentencia, valor de ingreso ${num}, break`)    
        break;
    }

}
console.log(`Factorial de 10: ${num}`)