$(document).ready(function () {
  $(".dark-mode").click(function () {
    $("body").toggleClass("active-mode");
  });
  $(".hamburger").click(function () {
    $(".nav").slideToggle();
  });
  $(".menu-dropdown").click(function () {
    $(this).toggleClass("active");
    $(this).parent().closest("li").find(".submenu").slideToggle();
  });
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
  });
  $(".product-slider").slick({
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
        },
      },
    ],
  });
});
