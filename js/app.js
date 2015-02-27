// Mobile Start Screen Animation

var $mbStartScreen = $('header');
var $header_bottom = $('.header-bottom');
var $menu = $('#menu');

$header_bottom.on('click touchend', function () {
	$header_bottom.slideDown(475);
	$mbStartScreen.slideUp(550);
	$menu.slicknav(); //Initialize slicknav on header close
});