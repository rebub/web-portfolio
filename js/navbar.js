// toggle dropdown menu
var dropdown = document.getElementById("dropdown-menu")

document.getElementById("dropdown-hamburguer").addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "" : "none";
}, false);

document.getElementById("dropdown-close").addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "" : "none";
}, false);