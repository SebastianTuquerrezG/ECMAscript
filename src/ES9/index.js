//#region Spread Operator o de Reposo
const person = {
    name: 'Sebastian',
    age: 18,
    country: 'CO'
}

let { country, ...all } = obj; // o let { name, ...all }
console.log(all);
//#endregion

//#region Propagation Properties
const obj = {
    name: 'Sebastian',
    age: 18,
}

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);
//#endregion

//#region Promise Finally
    const helloWorld = () => {
        return new Promise((resolve, reject) => {
            (true)
                ? setTimeout(() => resolve('Hello World'), 3000) //resolve('Hello World')
                : reject(new Error('Test Error'))
        });
    };

    helloWorld()
        .then(Response => console.log(Response))
        .catch(error => console.log(error))
        .finally(() => console.log('Finalizo'))
//#endregion
