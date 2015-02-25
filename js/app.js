var $mobile_menu_button = $('.menu-button');
var $mobile_intro = $('#header');

$mobile_menu_button.on('click touchend', function () {
	$mobile_intro.slideUp(550);
});