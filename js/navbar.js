document.addEventListener("DOMContentLoaded", function () {
    const navbarImg = document.getElementById("navbar_img");
    const popoverImg = document.getElementById("popover_img");

    // on scroll functionality
    window.addEventListener("scroll", function () {
        const windowTop = window.scrollY;
        const newHeight = windowTop > 0 ? "20px" : "50px";

        navbarImg.style.height = newHeight;
        popoverImg.style.height = newHeight;
    });

    // click on the navbar image to go to the top
    const navImg = document.getElementById("navbar_img");
    const popBtn = document.getElementById("pop_btn");
    const popBtnClose = document.getElementById("pop_btn_close");

    navImg.addEventListener("click", () => {
        window.scrollTo(0, 0); // scrolling to the top of a page
    });

    const toggleOverflow = () => {
        document.body.style.overflow = document.body.style.overflow === "hidden" ? "visible" : "hidden";
    };

    popBtn.addEventListener("click", toggleOverflow);
    popBtnClose.addEventListener("click", toggleOverflow);

});
