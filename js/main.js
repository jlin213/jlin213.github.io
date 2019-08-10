var $window = $(window);
var $elem = $(".contact-animation")
var $elem1 = $(".contact-text")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animation");
        $elem1.addClass("animation1");
    }else{
    	$elem.removeClass("animation");
    	$elem1.removeClass("animation1");
    }

});