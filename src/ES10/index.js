//#region Array Flat
//Aplanar arrays o arreglos
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(4));
//#endregion


//#region Array FlatMap
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flatMap(value => [value, value * 2]));
//#endregion
