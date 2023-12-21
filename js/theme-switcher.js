function load_theme() {
    const theme = document.getElementById("theme_file");

    if (!localStorage.getItem("theme_type")) {
        const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDarkMode ? "dark" : "light";

        theme.href = `/css/${defaultTheme}.css`;
        localStorage.setItem("theme_type", defaultTheme);
        setStyles(defaultTheme);
    } else {
        const savedTheme = localStorage.getItem("theme_type");
        theme.href = `/css/${savedTheme}.css`;
        setStyles(savedTheme);

        const toggleDark = document.getElementById("dark_theme");
        const toggleLight = document.getElementById("light_theme");
        const toggle_mobile_Dark = document.getElementById("mobile_dark_theme");
        const toggle_mobile_Light = document.getElementById("mobile_light_theme");
        toggleDark.style.display = savedTheme === "dark" ? "none" : "block";
        toggleLight.style.display = savedTheme === "dark" ? "block" : "none";
        toggle_mobile_Dark.style.display = savedTheme === "dark" ? "none" : "flex";
        toggle_mobile_Light.style.display = savedTheme === "dark" ? "flex" : "none";
    }
}

function setStyles(themeType) {
    const filterValue = themeType === "light" ? "invert(.8)" : "invert(0)";
    const displayMode = themeType === "light" ? "none" : "block";
    const flexDisplay = themeType === "light" ? "none" : "flex";

    document.getElementById("navbar_img").style.filter = filterValue;
    document.getElementById("popover_img").style.filter = filterValue;
    document.getElementById("light_theme").style.display = displayMode;
    document.getElementById("dark_theme").style.display = displayMode;
    document.getElementById("mobile_light_theme").style.display = flexDisplay;
    document.getElementById("mobile_dark_theme").style.display = displayMode;
}

function toggle_theme() {
    const theme = document.getElementById("theme_file");
    const isDarkMode = theme.href.includes("/css/dark.css");
    const newThemeType = isDarkMode ? "light" : "dark";

    theme.href = `/css/${newThemeType}.css`;
    localStorage.setItem("theme_type", newThemeType);

    const filterValue = newThemeType === "light" ? "invert(.8)" : "invert(0)";
    const displayMode = newThemeType === "light" ? "none" : "block";
    const flexDisplay = newThemeType === "light" ? "none" : "flex";

    document.getElementById("navbar_img").style.filter = filterValue;
    document.getElementById("popover_img").style.filter = filterValue;
    document.getElementById("light_theme").style.display = displayMode;
    document.getElementById("dark_theme").style.display = displayMode;
    document.getElementById("mobile_light_theme").style.display = flexDisplay;
    document.getElementById("mobile_dark_theme").style.display = displayMode;

    const toggleDark = document.getElementById("dark_theme");
    const toggleLight = document.getElementById("light_theme");
    const toggle_mobile_Dark = document.getElementById("mobile_dark_theme");
    const toggle_mobile_Light = document.getElementById("mobile_light_theme");
    toggleDark.style.display = newThemeType === "dark" ? "none" : "block";
    toggleLight.style.display = newThemeType === "dark" ? "block" : "none";
    toggle_mobile_Dark.style.display = newThemeType === "dark" ? "none" : "flex";
    toggle_mobile_Light.style.display = newThemeType === "dark" ? "flex" : "none";
}

load_theme();
