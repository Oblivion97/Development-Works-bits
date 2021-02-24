var UserObj = { name: "John", age: 31, city: "New York" };
var UserName = JSON.stringify(UserObj);
console.log(UserName, typeof (UserName));


var obj = {
    name: 'myObj'
};


console.log(JSON.stringify(obj));


var UserJSON = '{"name":"Mahmudul", "age":25, "city":"Dh"}';
var UserObj = JSON.parse(UserJSON);
console.log(UserObj.name);


myObj = {
    "name": "Mahmudul",
    "age": 25,
    "cars": ["Audi", "Batmobile", "F15"]
};
console.log(myObj.cars[1]);
delete myObj.cars[1];
console.log(myObj);