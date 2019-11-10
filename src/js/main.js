"use strict";

window.onscroll = function () {
  colorizeMenu()
};

function colorizeMenu() {
  var target = $('button[data-scrollto]').attr('data-scrollto');
  if (window.pageYOffset < $(target).offset().top) {
    $('.navbar--js').css('background-color', 'rgba(14, 216, 214, 0.0)');;
  } else {
    $('.navbar--js').css('background-color', 'rgba(14, 216, 214, 0.6)');
    $('.navbar--js').css('transition-duration', '1s');
  }
}

$('button[data-scrollto]').on('click', function (e) {
  // e.preventDefault();
  var target = $(this).attr('data-scrollto');
  var topPosition = $(target).offset().top;

  $('html, body').animate(
    { scrollTop: topPosition },
    600
  );
});
