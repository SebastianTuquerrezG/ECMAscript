//#region Array Flat
//Aplanar arrays o arreglos
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(4));
//#endregion


//#region Array FlatMap
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flatMap(value => [value, value * 2]));
//#endregion

//#region String TrimStar y TrimEnd
let saludo = '                 hola, Sebastian.             ';

console.log(saludo);
console.log(saludo.trimStart());
console.log(saludo.trimEnd());
//#endregion
