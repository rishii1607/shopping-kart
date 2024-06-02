$(document).ready(function () {
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
    autoplay: true,
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




// switch to dark mode
$(document).ready(function() {
  // Check LocalStorage for Existing Key and set Mode
      if (localStorage.getItem("mode") == "dark") {
      $( "body" ).addClass( "active-mode" );
         
      } else if (localStorage.getItem("mode") == "light"){
          $( "body" ).removeClass( "active-mode" );
         
      }
  // Check LocalStorage for Existing Key then Detect Browswer "prefers-color-scheme" and set Mode
      var mq = window.matchMedia( '(prefers-color-scheme: dark)' );
      if (localStorage.getItem("mode") == "light"){
          $( "body" ).removeClass( "active-mode" );
         
      } else if ( mq.matches ){
          $( "body" ).addClass( "active-mode" );
         
      }
  });
// Toggle Mode and set LocalStorage Key
  $( ".dark-mode" ).on("click", function() {
      if( $( "body" ).hasClass( "active-mode" )) {
        $( "body" ).removeClass( "active-mode" );
       
        localStorage.setItem("mode","light");
      } else {
        $( "body" ).addClass( "active-mode" );
       
        localStorage.setItem("mode","dark");
      }
  });