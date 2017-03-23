$(document).ready(function() {

    /*For Swipe Interaction on Mobile*/
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