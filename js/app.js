/*Before we begin, SlickNav and Slick are two separate plugins used in this project.
SlickNav defines the behavior of the mobile navigation and its Sass files can be found in
the css folder. Slick is a content carousel and all its files are located in the plugins folder.*/


// Mobile Start Screen Animation & Slick Carousel Initiation

var $mbIntro = $('#mobile-intro');
var $mbIntroBottom = $('.mobile-intro-bottom');
var $menu = $('#menu');
var $carousel = $('.carousel');
var $carousel_val = {
	autoplay: true,
	cssEase: "ease-out",
	pauseOnHover: true,
	autoplaySpeed: 5000,
	arrows: false,
	mobileFirst: true,
	responsive: [{
		breakpoint: 650,
		settings: {
			fade: true,
		}
	}]
};

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

//Header "Parallax" Scroll

//Shop Drop Content

$('section').hide()

var $heading = $('a.anchor');

$heading.next().hide();

$heading.on('click touchend', function(){
	$(this).next().slideDown();
	$heading.not(this).next().slideUp();
});


