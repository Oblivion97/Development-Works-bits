'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

function TWorking(){
    console.log("True Working");
}
function FWorking(){
    console.log("False Working");
}

TWorking();
FWorking();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

fruitProcessor(5, 0);

console.log(fruitProcessor(5,6));
const juice=fruitProcessor(5, 0);
console.log(juice);


var now = new Date();
var year=now.getFullYear();
console.log(year);
console.log(typeof year );


function CalcAge(BirthYear) {
    var now = new Date();
    var year=now.getFullYear();

    const calage = year - BirthYear;
    
    console.log(calage);
    const Age = `calculated Age ${calage}`;
    return Age
}

console.log(CalcAge(1997));


