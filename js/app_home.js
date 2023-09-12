$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true,
        centerPadding: "60px",
        prevArrow:"<button type='button' class='slick-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

