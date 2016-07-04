$(window).scroll(function(){
  var wScroll = $(this).scrollTop(),
      vHeight = $(this).height();

  if (wScroll < vHeight) {
    $('#parallax').css({
      backgroundPosition: '0% ' + (wScroll / 1) + '%'
    })
  }

})
