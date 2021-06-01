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

//#region Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2019-02-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);
//#endregion
