$(document).ready(function() {
  var scroll = function() {
    if ($(document).scrollTop() > 120) {
      $('.navbar-fixed-top').addClass('bg-nav-scroll');
      // $('.navbar-fixed-top').removeClass('height-10');
    } else {
      $('.navbar-fixed-top').removeClass('bg-nav-scroll');
      // $('.navbar-fixed-top').addClass('height-10');
    }
  };
  scroll();
  $(window).scroll(function() {
    scroll();
  });
});
