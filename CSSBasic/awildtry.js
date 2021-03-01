//changeRed(255)
//changeGreen(0)
//changeBlue(0)

changeRGB("r");
function changeRGB(x) {
  var col, r, g, b;
  r = document.getElementById("slideRed").value;
  g = document.getElementById("slideGreen").value;
  b = document.getElementById("slideBlue").value;
  col = w3color("rgb(" + r + "," + g + "," + b + ")");
  document.getElementById('valRed2').innerHTML = r;
  document.getElementById('valGreen2').innerHTML = g;
  document.getElementById('valBlue2').innerHTML = b;
  document.getElementById('rgbresult').style.backgroundColor = col.toRgbString();
  document.getElementById('rgbresulttext').innerHTML = col.toRgbString();
  if (col.isDark(150)) {
    document.getElementById('rgbresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('rgbresulttext').style.color = "#1f2d3d";
  }
}
//function changeGreen(value) {
//    document.getElementById('valGreen').innerHTML = value;
//}
//function changeBlue(value) {
//    document.getElementById('valBlue').innerHTML = value;
//}
changeRGBA("r");
function changeRGBA(x) {
  var col, r, g, b, a;
  r = document.getElementById("slideRedA").value;
  g = document.getElementById("slideGreenA").value;
  b = document.getElementById("slideBlueA").value;
  a = document.getElementById("slideAlphaA").value/10;
  col = w3color("rgba(" + r + "," + g + "," + b + "," + a + ")");
  document.getElementById('valRed2A').innerHTML = r;
  document.getElementById('valGreen2A').innerHTML = g;
  document.getElementById('valBlue2A').innerHTML = b;
  document.getElementById('valAlpha2A').innerHTML = a;
  document.getElementById('rgbaresult').style.backgroundColor = col.toRgbaString();
  document.getElementById('rgbaresulttext').innerHTML = col.toRgbaString();
  if (col.isDark(150) && a > 0.2) {
    document.getElementById('rgbaresulttext').style.color = "#ffffff";
  } else {
    document.getElementById('rgbaresulttext').style.color = "#1f2d3d";
  }
}