$(document).ready(function () {
    console.log("running");
    $(".facts").click(function () {
        console.log("clicked");
        $(this).css("background-color", "white");
    });
    $("#revealall").click(function () {
        $(".facts").each(function () {
            $(this).css("background-color", "white");
        });
    });
    $(".maintext").each(function () {
        var dashes = "";
        for (i = 0; i <= $(this).text().length; i++) {
            dashes = dashes + "-";
        }
        $(this).html($(this).html() + "<br>" + dashes);
    });
});
