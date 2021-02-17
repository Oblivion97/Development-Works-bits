function signupFunction() {

    var pnumber = /^\d{11}$/;
    var charecters = "/^[A-Za-z]+$/";
    var x = "Validation Successful";

    var textInputfirstname = document.getElementById("fname").value;
    var textInputlastname = document.getElementById("lname").value;
    var textInputphone = document.getElementById("phone").value;

    if (textInputfirstname.match(charecters)) {
        document.getElementById("fnameer").innerHTML = "Empty or Charecters are not Alphabet.";
    }
    if (textInputlastname.match(charecters)) {
        document.getElementById("lnameer").innerHTML = "Empty or Charecters are not Alphabet.";
    }
    if (!textInputphone.match(pnumber)) {
        document.getElementById("pnumberer").innerHTML = "Empty or Phone Number Criteria Does not match.";
        return x;
    }

    alert(x);
}

