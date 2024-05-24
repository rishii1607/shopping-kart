$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav").slideToggle();
        // $(this).toggleClass("active");
    });
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
      });
      $('.product-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }, 
          ]
      });
});