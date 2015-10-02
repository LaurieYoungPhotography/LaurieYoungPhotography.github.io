//= require jquery-2.1.4

$(function() {
    $(".menuIcon").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});
