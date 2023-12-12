

$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-inverse").css("background", "#fff");
        else
            $(".navbar-inverse").css("background", "transparent");
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-lg .navbar-nav > li > a").css("color", "rgba(0,0,0,.9)" );
        else
            $(".navbar-lg .navbar-nav > li > a").css("color", "rgba(0,0,0,.9)");
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-inverse").css("box-shadow", " 11px 15px 29px 0 rgba(48,48,48,0.07)" );
        else
            $(".navbar-inverse").css("box-shadow", "none" );
    }); 

});
