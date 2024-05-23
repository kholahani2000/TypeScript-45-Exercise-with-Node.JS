
//Write a program that creats objects containing these items.

//Data type of person object.
interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean,
}

//Person object.
//Print person.
let person :person = {
    age : 21 ,
    name : 'Faiza' ,
    nationality : 'Pakistan' ,
    student : true ,
}

console.log(person);

//Data type of jeep object.
 interface jeep {
maker : string,
colour : string,
automatic : boolean,
}
//Jeep object.
let jeep = {
maker : 'GMC' ,
colour : 'Black' ,
automatic : true ,
}
//Print jeep.
console.log(jeep);