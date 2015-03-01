
// Mobile Start Screen Animation & Slick Carousel Initiation

var $mbIntro = $('#mobile-intro');
var $mbIntroBottom = $('.mobile-intro-bottom');
var $menu = $('#menu');
var $carousel = $('.carousel');
var $carousel_val = {
	autoplay: true,
	cssEase: "ease-out",
	fade: true,
	pauseOnHover: true,
	autoplaySpeed: 4000,
	arrows: false
}

if ($mbIntro.css('display') == 'block') {

$carousel.hide();

$mbIntroBottom.on('click touchend', function () {
	$('html, body').scrollTop(0).scrollLeft(0);
	$mbIntro.css('position', 'absolute');
	$mbIntroBottom.delay(50).slideDown(475);
	$mbIntro.delay(50).slideUp(550);
	$menu.slicknav(); //Initialize slicknav on header close
	$carousel.show();
	$carousel.slick($carousel_val);

});

} else {
	$carousel.show();
	$menu.slicknav();
	$carousel.slick($carousel_val);
}



