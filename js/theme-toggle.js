// VARS

const body = document.body;
const theme = localStorage.getItem("theme");
const text = localStorage.getItem("text");
var theme_switch = document.getElementById("theme-switcher");

let onpageLoad = localStorage.getItem("theme") || "";
if (onpageLoad != null && onpageLoad == "night") {
    theme_switch.checked = true;
    document.getElementById("theme-text").innerHTML = "dark mode 💡";
} else {
    theme_switch.checked = false;
    document.getElementById("theme-text").innerHTML = "light mode ⛅";
}
body.classList.add(onpageLoad);

// APPLY ON RELOAD

if (theme) {
    body.classList.add(theme);
}

// BUTTON EVENT HANDLERS

function themeToggle() {
    if (theme_switch.checked) {
        localStorage.setItem("theme", "night");
        body.classList.replace("day", "night");
        document.getElementById("theme-text").innerHTML = "dark mode 💡";
        localStorage.setItem("text", "night");
    } else {
        localStorage.setItem("theme", "day");
        body.classList.replace("night", "day");
        document.getElementById("theme-text").innerHTML = "light mode  ⛅";
        localStorage.setItem("text", "day");
    }
}

document.onscroll = function () {
    if ($(window).width() > 480) {

        if (window.innerHeight + window.scrollY > document.body.clientHeight - 400) {
            document.getElementById('theme-button').style.opacity = '0';
        } else {
            document.getElementById('theme-button').style.opacity = '100';
        }

    }

}