window.addEventListener("load", function () {
    new Glider(document.querySelector(".projects-slider"), {
        slidesToScroll: 1,
        slidesToShow: 1.4,
        draggable: true,
    });

    new Glider(document.querySelector(".skillsets-slider"), {
        slidesToScroll: 1,
        slidesToShow: 1.4,
        draggable: true,
    });
});