// VARS
const body = document.body;
const theme = localStorage.getItem("theme");
const text = localStorage.getItem("text");
var theme_switch = document.getElementById("theme-switch");

let onpageLoad = localStorage.getItem("theme") || "";

if (theme == null) {
    body.classList.add("day");
}

if (onpageLoad != null && onpageLoad == "night") {
    theme_switch.checked = true;
    document.getElementById("theme-text-mobile").innerHTML = "Light mode";
} else {
    theme_switch.checked = false;
    document.getElementById("theme-text-mobile").innerHTML = "Dark mode";
}

// APPLY ON RELOAD
if (theme) {
    body.classList.add(theme);
}

// BUTTON EVENT HANDLERS
function themeToggle() {
    if (theme_switch.checked) {
        localStorage.setItem("theme", "night");
        body.classList.replace("day", "night");
        document.getElementById("theme-text-mobile").innerHTML = "Light mode";
        localStorage.setItem("text", "night");
    } else {
        localStorage.setItem("theme", "day");
        body.classList.replace("night", "day");
        document.getElementById("theme-text-mobile").innerHTML = "Dark mode";
        localStorage.setItem("text", "day");
    }
}