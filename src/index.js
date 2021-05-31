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