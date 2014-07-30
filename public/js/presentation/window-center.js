( function () {
  window.keepCentered = function() {
    var h = $(this).height();
    var w = $(this).width();
    if ( h > 380 ) {
      $('.main').css({'margin-top': h / 4 });
    } else {
      $('.main').css({'margin-top': "10px" });
    }
  };

  $(window).on('resize', function() {
    keepCentered();
  });

})();

keepCentered();

