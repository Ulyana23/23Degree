$(document).ready(function() {
        $("#radios").radiosToSlider();
        $(".range").attr('max', $(".slider__item").width() * 21 - $(".slider__nav").width() + 90);
});


//сделать реакцию на изменение размера окна
$(".range").on('input', function() {
        $(".slider__nav").scrollLeft($(".range").val());
});

$(".slider__nav").scroll(function () {
        $(".range").val($(".slider__nav").scrollLeft());
});
