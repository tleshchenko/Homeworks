"use strict";

$(document).ready(function () {
  $('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true
      }
    }]
  });
});
$(document).ready(function () {
  $('.guitars_slider').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.guitar_prev_arrow',
    nextArrow: '.guitar_next_arrow',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      }
    }]
  });
});
$(document).ready(function () {
  $('.partners_slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 5
      }
    }]
  });
});