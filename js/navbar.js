$(() => {
    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ?
            $("nav").addClass("navSize") :
            $("nav").removeClass("navSize");
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


    //Toggle Menu
    $("#menu-toggle").on("click", () => {
        $("#menu-toggle").toggleClass("closeMenu");
        $("ul").toggleClass("showMenu");
        $("nav").removeClass("navShadow");
        $("nav").css("border-radius", "0 0 10px 10px;");

        $("li").on("click", () => {
            $("#menu-toggle").removeClass("closeMenu");
            $("nav").addClass("navShadow")
            $("ul").removeClass("showMenu");
        });
    });
});