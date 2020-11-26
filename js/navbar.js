$(() => {
    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ?
            $("nav").addClass("navShadow") :
            $("nav").removeClass("navShadow");
        windowTop > 100 ?
            $("ul").css("top", "100px") :
            $("ul").css("top", "130px");
    });

    setTimeout(function () {
        document.body.className = "";
    }, 650);

    //Click title To Scroll To Top
    $("#title")
        .add("#logo")
        .on("click", () => {
            $("html,body").animate({
                    scrollTop: 0,
                },
                500
            );
        });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on("click", function (e) {
        $("html,body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 100,
            },
            500
        );
        e.preventDefault();
    });

    //Toggle Menu
    $("#menu-toggle").on("click", () => {
        $("#menu-toggle").toggleClass("closeMenu");
        $("ul").toggleClass("showMenu");
        $("nav").removeClass("navShadow")

        $("li").on("click", () => {
            $("#menu-toggle").removeClass("closeMenu");
            $("nav").addClass("navShadow")
            $("ul").removeClass("showMenu");
        });
    });

    //Toggle Social Media
    $("#media-toggle").on("click", () => {
        $("#media-toggle").toggleClass("closeMedia");
        $("ul").toggleClass("showMedia");

        $("li").on("click", () => {
            $("ul").removeClass("showMedia");
            $("#media-toggle").removeClass("closeMedia");
        });
    });
});
