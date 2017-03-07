$(document).ready(function() {

	/*$('.box').click(function() {
		$(this).toggle();
	});*/

	/*For hover interaction/
	$('.article-img').hover(function() {
        $('.overlay').animate({width: "toggle"}, 200);
        $('.overlay').css("display", "inline-block");
        $('.miniheadline').delay(200).fadeIn();
    }, function() {
        $('.miniheadline').fadeOut(100);
        $('.overlay').delay(100).animate({width: "toggle"}, 200);
    });

	/*$('.article-img').hover(function() {
        $('.overlay').animate({width: "toggle"}, 200);
        $('.overlay').css("display", "inline-block");
        $('.miniheadline').delay(200).fadeToggle(100);
    }, function() {
        $('.miniheadline').fadeToggle(100);
        $('.overlay').delay(100).animate({width: "toggle"}, 200);
    });

	/*For scrolling interaction
	$(window).scroll(function() {
	   var space_above = $('.article-img').offset().top,
	       card_height = $('.article-img').outerHeight(),
	       window_height = $(window).height(),
	       scroll_position = $(window).scrollTop();
	    console.log((space_above-window_height) , scroll_position);
	   if (scroll_position > (space_above+card_height-window_height)){
	    $('.overlay').fadeIn(200);
        $('.overlay').css("display", "inline-block");
        $('.miniheadline').fadeIn();
	   } else {
	   	$('.miniheadline').delay(100).fadeOut();
	   	$('.overlay').fadeOut(200);
	   }
	});*/

	/*$('.right-side').hammer().on('swipeleft', function() {
		$('.right-side').animate({margin-left: '-=400', opacity: '1.0'}, 200)
	});*/

	/*$('.right-side').hammer().on('swipeleft', function() {
		$(this).animate({marginRight: '+=345px', marginTop: '0px', opacity: '1.0'}, 200);
		$('.main-story').animate({marginLeft: '-=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.left-side').animate({marginLeft: '-=300px'})
	});

	$('.left-side').hammer().on('swiperight', function() {
		$(this).animate({marginLeft: '+=345px', marginTop: '0px', opacity: '1.0'}, 200);
		$('.main-story').animate({marginLeft: '+=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.right-side').animate({marginRight: '-=300px'})
	});*/

	$('.main-story').hammer().on('swipeleft', function() {
		$(this).animate({marginLeft: '-=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.left-side').animate({marginLeft: '-=345px'});
		$('.right-side').animate({marginRight: '+=345px', marginTop: '0px', opacity: '1.0'}, 200);
	});

	$('.main-story').hammer().on('swiperight', function() {
		$(this).animate({marginLeft: '+=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.left-side').animate({marginLeft: '+=345px', marginTop: '0px', opacity: '1.0'}, 200);
		$('.right-side').animate({marginRight: '-=345px'});
	});

	$('.right-side').hammer().on('swiperight', function() {
		$(this).animate({marginRight: '-=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.main-story').animate({marginLeft: '+=345px', marginTop: '0px', opacity: '1.0'}, 200);
		$('.left-side').animate({marginLeft: '+=345px'});
	});

	$('.left-side').hammer().on('swipeleft', function() {
		$(this).animate({marginLeft: '-=345px', marginTop: '40px', opacity: '0.3'}, 200);
		$('.main-story').animate({marginLeft: '-=345px', marginTop: '0px', opacity: '1.0'}, 200);
		$('.right-side').animate({marginRight: '+=345px'});
	});

});
