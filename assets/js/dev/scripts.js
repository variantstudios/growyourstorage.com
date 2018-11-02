$(document).ready(function() {
  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    autoplaySpeed: 2500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoHeight: false,
    dots: false,
    lazyLoad: true,
    lazyLoadEager: 1
  });
});
