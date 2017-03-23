$(document).ready(function() {

    /*For Hover Interaction on Desktop*/
    $('.article-img').hover(function() {
        $('.overlay').animate({width: "toggle"}, 200);
        $('.overlay').css("display", "inline-block");
        $('.miniheadline-hover').delay(200).fadeToggle(100);
    }, function() {
        $('.miniheadline-hover').fadeToggle(100);
        $('.overlay').delay(100).animate({width: "toggle"}, 200);
    });

    /*For Scroll Interaction on Mobile*/
    var hide = true;
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var windowTop =  $(window).scrollTop()

        $("p").each(function() {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          var objectTop = $(".article-img").offset().top;

          /* If the element is completely within bounds of the window, animate in */
          // Object enter Window (bottom) and not leaving window (top)
          if ((objectBottom < windowBottom) && !(objectTop < windowTop)) { //object comes into view and currently hidden
            if (hide == true) {
                $('.overlay').animate({width: "120px"}, 200);
                $('.miniheadline').delay(200).fadeToggle(100);
                hide = false;
            }
          } else if (hide == false) { //object goes out of view and is currently unhidden
            $('.miniheadline').fadeToggle(100);
            $('.overlay').animate({width: "0px"}, 200);
            hide = true;
          }
        });
    }).scroll();

});
