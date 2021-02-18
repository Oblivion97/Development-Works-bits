
var person = {
    firstName: "H M Mahmudul",
    lastName: "Hasan",
    age: 24,
    eyeColor: "brown"
};

document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old." + "His last name is " + person.lastName + ". His eyes color is " + person.eyeColor;

var person = new Object();
person.firstName = "kyle";
person.lastName = "Walker";
person.age = 30;
person.eyeColor = "blue";

document.getElementById("demoo").innerHTML = person.firstName + " is " + person.age + " years old.";


var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

var x = person;
x.age = 10;

document.getElementById("demooo").innerHTML = person.firstName + " is " + person.age + " years old.";