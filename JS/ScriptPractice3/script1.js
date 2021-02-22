console.log("H M Mahmudul Hasan");

//callbacks
function myFirst() {
    console.log("Hello");
}

function mySecond() {
    //myFirst();
    console.log("Goodbye");
}
myFirst();
mySecond();

//callbacks2
function sumDisplayer(sum) {
    console.log(sum);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
console.log(result);

//Asynchronous callback

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//Timeout Function JS
setTimeout(myFunction, 3000);

function myFunction() {
    var msg = "I love You !!";
    console.log(msg);
}

//Time out 2
setTimeout(function () { console.log("I love JS !!!"); }, 3000);

//Set Interval
setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    

    document.getElementById("hour").innerHTML = d.getHours();
    document.getElementById("minute").innerHTML = d.getMinutes();
    document.getElementById("second").innerHTML = d.getSeconds();
}