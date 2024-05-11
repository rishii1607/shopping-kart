$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav").slideToggle();
        // $(this).toggleClass("active");
    });
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
      });
});