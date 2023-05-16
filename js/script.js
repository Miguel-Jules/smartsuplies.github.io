var menu = document.getElementById("menu");
var nav = document.getElementById("nav");

menu.addEventListener("click", function() {
    nav.classList.toggle("show");
});

function buy() {
    alert("Purchased Successfully!");
}