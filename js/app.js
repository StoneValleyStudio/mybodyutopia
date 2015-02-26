// Mobile Start Screen Animation

var $mb_start = $('header');
var $header_bottom = $('.header-bottom');

$header_bottom.on('click touchend', function () {
	$header_bottom.slideDown(475);
	$mb_start.slideUp(550);
});