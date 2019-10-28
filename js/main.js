var $window = $(window);
var $contact = $(".contact-animation")
var $contact1 = $(".contact-text")

function isScrolledIntoView(elem, $window) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($contact, $window)) {
        $contact.addClass("animation");
        $contact1.addClass("animation1");
    }else{
    	$contact.removeClass("animation");
    	$contact1.removeClass("animation1");
    }

});


var $cursor = $(".cursor")
// const cursor = document.querySelector('.cursor');
$(document).on("mousemove", function(e){
    $(".cursor").css({
         "top": (e.pageY - 20)+"px",
         "left": (e.pageX - 20)+"px"
    })
    // $cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})






// var $whitescreen1 = $("#about")
// var $whitescreen2 = $("#contact")
// var $nav = $(".nav-item1")

// $(document).on("scroll", function(){
//     if(isScrolledIntoView($whitescreen1, $window)){
//         // $cursor.css({
//         //     "border": "1px solid black"
//         // })
//         $nav.css({
//             "color": "black"
//         })

//     }
//     else if(isScrolledIntoView($whitescreen2, $window)){
//         // $cursor.css({
//         //     "border": "1px solid black"
//         // })
//         $nav.css({
//             "color": "black"
//         })
//     }else{
//         // $cursor.css({
//         //     "border": "1px solid white"
//         // })
//         $nav.css({
//             "color": "white"
//         })
//     }
// });



// jQuery(document).ready(function() {
//   var mouseX = 0, mouseY = 0;
//   var xp = 0, yp = 0;
   
//   $(document).mousemove(function(e){
//     mouseX = e.pageX - 30;
//     mouseY = e.pageY - 30; 
//   });
    
//   setInterval(function(){
//     xp += ((mouseX - xp)/6);
//     yp += ((mouseY - yp)/6);
//     $(".cursor").css({left: xp +'px', top: yp +'px'});
//   }, 20);
// });