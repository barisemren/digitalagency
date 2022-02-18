$(document).ready(function () {

    const delay = setTimeout(load, 1500);

    function load() {
        $(".loader").css("display", "none");
        $("body").css("overflow-y", "auto");
    }

    $(".fa-bars").click(function () {
        $(".nav-menu").toggle();
    });
})