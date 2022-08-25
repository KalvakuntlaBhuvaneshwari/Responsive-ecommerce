var header=document.querySelector("h1")
header.style.color = 'purple'// The initial color of the header would be blue
function getRandomColor() {
    var letters = "0123456789ABCDEF" ;
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}
//Simple function for clarity
function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}
//Now perform the action over intervals(milliseconds)
setInterval("changeHeaderColor()",500);
function shop(){
    alert("add the best jewellery you like")
}
function add(){
    alert("added to the cart")
}
var header = document.querySelector("h1")//grabbing the header
header