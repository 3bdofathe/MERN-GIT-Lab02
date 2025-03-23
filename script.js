
let count = 0;

var button = document.getElementById("counterButton");
var display = document.getElementById("counterDisplay");

button.addEventListener("click", function () {
    count++; 
    display.textContent = count; 
});