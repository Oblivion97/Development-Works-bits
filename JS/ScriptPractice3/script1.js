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