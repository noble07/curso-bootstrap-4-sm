new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  offset: 60,
});

/* ------------ OCULTAR BOTON IR ARRIBA ---------------- */

$(function() {
  $(window).scroll(function () {
    var scrolltop = $(this).scrollTop();
    if(scrolltop >= 50) {
      $('.go-up').fadeIn();
    } else {
      $('.go-up').fadeOut();
    }
  })
});

$(window).scroll(function () {
  var nav = $('.header');
  var scroll = $(this).scrollTop();
  if(scroll >= 100) {
    nav.addClass('menu-background');
  }else{
    nav.removeClass('menu-background');
  }
});