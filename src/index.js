//#region  Parametros Por Defecto
function antesDeES6(name, age, country)
{
    var name = name || "Sebastian";
    var age = age || 18;
    var country = country || "CO"; 
}

// ES6

function ahoraConES6(name = "Sebastian", age = 18, country = "CO")
{
    console.log(name, age, country);
}

ahoraConES6();
ahoraConES6("Joan", 19, "EU");
//#endregion

//#region Template Literals
let L = "#SOS"
let C = "Colombia"
let sinES6 = L + " " + C;
console.log(sinES6);
let conES6 = `${L} ${C}`;
console.log(conES6);
//#endregion

//#region Multilinea
let txtSinES6 = "Aprendo las caracteristicas de ECMAscript 6+ \n"
+ "con Oscar Barajas";

let txtConES6 = `Caracteristica
multilinea
`;

console.log(txtSinES6);
console.log(txtConES6);
//#endregion

//#region Desestructuracion
let person = {
    'name' : 'Sebastian',
    'age' : 18,
    'country' :  'CO'
}

console.log(person.name, person.age, person.country);

//ES6
let { name, age, country } = person; 
//dejo el o los atributos que quiero mostar en el let
console.log(name, age, country);
//#endregion

//#region Spread Operator
let animalsM = ["Perro", "Gato", "Hamster"];
let animalsR = ["Serpiente", "Iguana", "Salamandra"];

let fauna = ["Gonpachiro", ...animalsM, ...animalsR];

console.log(fauna);
//#endregion

//#region LET, CONST y VAR
{
    var globalVar = "GlobalVar";
}
{
    let globalLet = "GlobalLet";
    console.log(globalLet);
}

console.log(globalVar);

const sebas = "Tuquerrez"
sebas = "Gomez" // esto no se puede es constante, la primera inicializacion.
//#endregion 

//#region Parametros en Objetos
let name = "Sebatian";
let age = 18;

//ES5
let objPerson = { name: name, age: age };

//ES6
let objPerson2 = { name, age };
console.log(objPerson2);
//#endregion
