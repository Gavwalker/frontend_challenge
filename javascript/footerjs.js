//Set variables
var footer = document.getElementById('YearPlace');

//initialize functions
document.onload = update();

//functions
function update(){
    var d = new Date();
    var year = d.getFullYear();
    footer.innerHTML = year;
}
