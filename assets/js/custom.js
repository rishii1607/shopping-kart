$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav").slideToggle();
        // $(this).toggleClass("active");
    });
    $(".menu-dropdown").click(function() {
      $(this).toggleClass("active");
      $(this).parent().closest('li').find(".submenu").slideToggle();
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