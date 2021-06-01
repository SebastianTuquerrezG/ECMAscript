//#region  Object Entries
const  data = {
    dataSciencie : 'Sebastian',
    devOps: 'Joan',
    UX : 'Tomy'
} 

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//#endregion

//#region Object Values
//Usando la variable data de la region anterior
const values = Object.values(data);
console.log(values);
console.log(values.length);
//#endregion

//#region Padding
const string = 'hello';

console.log(string.padStart(20, 'the earth, say: '), string.padEnd(12, '-------'))
//#endregion