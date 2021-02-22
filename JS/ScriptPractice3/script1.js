console.log("H M Mahmudul Hasan");

//callbacks
function myFirst() {
    console.log("Hello");
}

function mySecond() {
    myFirst();
    console.log("Goodbye");
}
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