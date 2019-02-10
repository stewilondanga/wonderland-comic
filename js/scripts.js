var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var fallRate = (scrollTop / docHeight) * 60;
  console.log(fallRate);
  $('.alice-falling').css({
    'transform' : 'translateX(-'+fallRate+'%)'
  });
});
