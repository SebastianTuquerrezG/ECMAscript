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

//#region Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (false) //o false
            ? setTimeout(() => resolve('Hello World'), 3000)
            :reject(new Error('Test Error'))
    }) 
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
//#endregion