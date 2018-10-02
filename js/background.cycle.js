$(document).ready(function (){
    $(".btn-block-slider:nth-child(1)").css("background-color", "#b6907e");
    $(".btn-block-slider:nth-child(odd)").click( function () {
        $("#first-slider-second").fadeToggle("slow");
        $("#first-slider-first").fadeToggle("slow");
    } );
    $(".btn-block-slider:nth-child(even)").click( function () {
        $("#first-slider-second").fadeToggle("slow");
        $("#first-slider-first").fadeToggle("slow");
    } );
    $(".btn-block-slider").click(function (e) {
        $(".btn-slider").css("background-color", "#5d4a41");
        e.target.style.backgroundColor="#b6907e";
    })
});