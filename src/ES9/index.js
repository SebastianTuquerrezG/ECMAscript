//#region Spread Operator o de Reposo
const obj = {
    name: 'Sebastian',
    age: 18,
    country: 'CO'
}

let { country, ...all } = obj; // o let { name, ...all }
console.log(all);
//#endregion