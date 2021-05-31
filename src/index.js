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