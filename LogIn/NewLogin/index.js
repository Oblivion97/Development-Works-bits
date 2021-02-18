function validUser() {
    var x = document.forms["LogInForm"]["user"].value;
    if (x.length < 1) {
        alert("Please Enter your User Id.");
    }
}
function validPass() {
    var x = document.forms["LogInForm"]["password"].value;
    if (x == "") {
        alert("Please enter your password.");
    }
    return false;
}

function userValidation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    if (user.length == 0 || pass.length == 0) {
        alert("Please Fill all fields");
        return false;
    }
    alert("You are Logged In");
    return true;
}
