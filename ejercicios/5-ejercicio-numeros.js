//- Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 170;
console.log(`Altura: ${altura_cm}cm `);

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura_mt = 1.70;
console.log(`Altura: ${altura_mt}mts`);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 88.500;
console.log(`Peso: ${peso_kg}kg`);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_rnd = Math.round(altura_mt);
console.log(`Altura redondeada: ${altura_rnd}mts`);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_rnd_abajo = peso_kg;
console.log(`Peso rededondeado hacia abajo: ${parseInt(peso_rnd_abajo)}KG`);


//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let NroMax_1 = Number.MAX_VALUE + 1;
let NroMax = Number.MAX_VALUE;

if (NroMax_1 === NroMax){
    console.log("El nroMax de JS + 1, es IGUAL al NroMax que soporta JS");

}else{
    console.log("El nroMax de JS + 1, es DISTINTO al NroMax que soporta JS")
}