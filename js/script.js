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

$("[data-scroll]").click(function (event) {
        event.preventDefault(); //отменяем стандартное поведение ссылки

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $(".menu").removeClass("show");

        $("html, body").animate({
                scrollTop: blockOffset + 20
        }, 1000);

});

//###--INTRO_POINT--###
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

//###--PORTFOLIO--###
$("[data-portfolio]").click(function () {
        if ( $(this).prop('checked') === true ) {

                var currentOption = $(this).data("portfolio");
                $("[data-portfolio='" + currentOption + "']").prop('selected', true);

                changeImage(currentOption);
        }
});

$(".portfolio__select").change(function () {
        var currentOption = $(".portfolio__select option:selected").data("portfolio");
        $("[data-portfolio='" + currentOption + "']").prop('checked', true);

        changeImage(currentOption);
});


function changeImage(currentOption) {
        if (currentOption == 1) {
                $("[data-portfolio-type]").fadeTo(0, 0);
                $("[data-portfolio-type]").hide();
                $("[data-portfolio-type]").show();
                $("[data-portfolio-type]").fadeTo(700, 1);
        }
        else {
                $("[data-portfolio-type]").fadeTo(0, 0);
                $("[data-portfolio-type]").hide();
                $("[data-portfolio-type='" + currentOption + "']").show();
                $("[data-portfolio-type='" + currentOption + "']").fadeTo(700, 1);
        }
}

//###--CALCULATOR--###
$("[name='options']").click(function () {
        if ( $(this).prop('checked') === true ) {
                $("#square").text($(this).val() + "м\xb2");

                object_cost_calculation();
        }
});

$("[name='button']").click(function () {
        var light = "2 850";
        var medium = "4 850";
        var full = "8 850";

        if ( $(this).prop('checked') === true ) {
                var package = $(this).val();

                if (package == "light") $("#cost").text(light + " тг.");
                if (package == "medium") $("#cost").text(medium + " тг.");
                if (package == "full") $("#cost").text(full + " тг.");

                object_cost_calculation();
        }
});

function object_cost_calculation() {
        var light = 2850;
        var medium = 4850;
        var full = 8850;

        var option = parseInt($("[name='options']:checked").val().split(' ').join(''));
        var button = $("[name='button']:checked").val();

        if (button == "light") button = light;
        if (button == "medium") button = medium;
        if (button == "full") button = full;

        $("#object_cost").text(prettify(option * button)  + " тг.");
}

function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}
