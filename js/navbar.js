$(() => {
    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ?
            $("nav").addClass("navbar-addon") :
            $("nav").removeClass("navbar-addon");
    });

    //Click title To Scroll To Top
    $("#title")
        .add("#logo")
        .on("click", () => {
            $("html,body").animate({
                    scrollTop: 0,
                },
                150
            );
        });
});


// toggle dropdown menu
var dropdown = document.getElementById("dropdown-menu")

document.getElementById("dropdown-hamburguer").addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "" : "none";
}, false);

document.getElementById("dropdown-close").addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "none" ? "" : "none";
}, false);