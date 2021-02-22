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

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}

//Get Files/Web page in a Interval
// function myDisplayer(some) {
//     console.log(some); 
// }

// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "temp.html");
//     req.onload = function () {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback("Error: " + req.status);
//         }
//     }
//     req.send();
// }

// getFile(myDisplayer);


//Promise Function
let myPromise = new Promise(
    function (myResolve, myReject) {
        setTimeout(
            function () {
                myResolve("I love You !!");
            }
            , 3000);
    }
);

myPromise.then(function (value) {
    console.log(value);;
});

//JavaScript async
function myDisplayer(some) {
    console.log(some);
}

async function myFunction() { return "Hello Async Function"; }

myFunction().then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

//JavaScript await
async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        myResolve("I am await test");
    });
    console.log(await myPromise);
}

myDisplay();


//For in
var txt = "";
var person = ["John", "Doe"];
var x;
for (x in person) {
    console.log(person[0]);
    txt += person[x] + " ";
}
console.log(txt); 