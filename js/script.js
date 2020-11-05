$(document).ready(function() {
        $("#radios").radiosToSlider();
        //--slider
        $(".range").attr('max', $(".slider__item").width() * 21 - $(".slider__nav").width() + 90);

        let timerSwipe = setInterval(() => $(".oval").toggleClass("active"), 400);
        setTimeout(() => { clearInterval(timerSwipe); }, 1600);
});


//###--MENU--###
$(".intro__menu").click(function () {
        $(".menu").addClass("show");
});

$(".menu__close").click(function () {
        $(".menu").removeClass("show");
});


//###--INTRO_SWIPE--###
$(".intro__swipe").click(function () {
        var blockOffset = $(".services").offset().top;
        $("html, body").animate({
                scrollTop: blockOffset
        }, 500);
});

$(window).scroll(function () {
        //alert($(window).scrollTop() + $(window).height());
        if($(window).scrollTop() == 0) {
                $(".point").removeClass("active");
        }
        else $(".point").addClass("active");
});

//###--SERVICES--##
$(".services button").click(function () {
        $("html, body").animate({
                scrollTop: 0
        }, 500);
});


//###--SLIDER--###
$(".range").on('input', function() {
        $(".slider__nav").scrollLeft($(".range").val());
});

$(".slider__nav").scroll(function () {
        $(".range").val($(".slider__nav").scrollLeft());
});

$(window).resize(function() {
        $(".range").attr('max', $(".slider__item").width() * 21 - $(".slider__nav").width() + 90);
});
