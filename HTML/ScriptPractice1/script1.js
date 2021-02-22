var msg = "Hello World!";

document.getElementById("demo").innerHTML = msg;


//document.getElementsByTagName("H5").innerHTML = "Get Elements By Tag Name"

/*
Uncaught TypeError: Cannot set property 'innerHTML' of null
at VM307 script1.js: 3

the value of show_time is null, we can infer that JavaScript was 
unable to successfully retrieve the element whose ID is show_time.

In this case, the cause is that we have placed our <script> tag too
 early in our program. Our <script> tag appears in the header of our page. 
 This is a problem because without using an onload() function, we can only 
 select elements that come before our <script>.

 The “Uncaught TypeError: cannot set property ‘innerHTML’ of null” error is caused by trying to set an innerHTML value for an element whose value is equal to null.

To solve this error, make sure your <script> tag comes after the element that you want to select in your script. If this does not solve the issue, check to make sure you are selecting a valid element in your program.
*/