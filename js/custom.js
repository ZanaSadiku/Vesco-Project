/*------------------------------------------------------------
	Services
------------------------------------------------------------*/
$(function() {
	//animate on scroll
	new WOW().init();
});
/*------------------------------------------------------------ 
	End Services
------------------------------------------------------------*/
/*------------------------------------------------------------ 
	Work
------------------------------------------------------------*/
$(function(){
	$('.img_wrapper').magnificPopup({
	  delegate: 'a',  //child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	  	enabled: true
	  }
	});
});
/*------------------------------------------------------------ 
	End Work
------------------------------------------------------------*/
/*------------------------------------------------------------ 
	Team
------------------------------------------------------------*/
$(function(){
	$(".team_members_wrapper").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		        items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		        items: 3
		    }
		}
	});
});
/*------------------------------------------------------------ 
	End Team
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Testimonials
------------------------------------------------------------*/
$(function(){
	$(".customers_testiomonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
/*------------------------------------------------------------ 
	End Testimonials
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Stats
------------------------------------------------------------*/ 
$(function(){
	$('.counter').counterUp({
                delay: 10,
                time: 2000
            });
});
/*------------------------------------------------------------ 
	End Stats
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Clients
------------------------------------------------------------*/ 
$(function(){
	$(".clinets_list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		        items: 3
		    },
		    // breakpoint from 768 up
		    768 : {
		        items: 5
		    },
		    // breakpoint from 992 up
		    992 : {
		        items: 5
		    }
		}
	});
});
/*------------------------------------------------------------ 
	End Clinets
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Navigation
------------------------------------------------------------*/ 
//Show and Hide transparent black navigation
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() < 50) {
			//hide nav
			$('nav').removeClass("vesco_top_nav");
			//$("#back_to_top").fadeOut();  -> for back to top
		}
		else {
			//show nav
			$('nav').addClass('vesco_top_nav');
			//$("#back_to_top").fadeIn();   -> for back to top
		}
	});
});
/*------------------------------------------------------------ 
	End Navigation
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Smooth Scrolling
------------------------------------------------------------*/ 
$(function(){
	$("a.smooth_scroll").click(function(event) {
		event.preventDefault();
		//get or return id like #about, #work, #team etc
		var section = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(section).offset().top - 53 }, 1250, 'easeInOutExpo');
	});
});

//no plugins for smooth scrolling
/*$(function() {
		$('a.smooth_scroll').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
        	var target = $(this.hash);
        	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        	if (target.length) {
        	    $('html,body').animate({scrollTop: target.offset().top}, 1250);
            	return false;
    	    }
	    }
	});
});*/
/*$(document).on('click', 'a.smooth_scroll', function (event) {
    	event.preventDefault();
    	$('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top}, 1250);
});*/
/*------------------------------------------------------------ 
	End Smooth Scrolling
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Back To Top Button
------------------------------------------------------------*/ 
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() < 50) {
			$("#back_to_top").fadeOut();
		}
		else {
			$("#back_to_top").fadeIn();
		}
	});
});
/*------------------------------------------------------------ 
	End Back To Top Button
------------------------------------------------------------*/ 
/*------------------------------------------------------------ 
	Close mobile menu
------------------------------------------------------------*/
$(function() {
	$('.navbar-collapse ul li a').on('click touch', function() {
		$('.navbar-toggle').click();
	});
});
/*------------------------------------------------------------ 
	End Close mobile menu
------------------------------------------------------------*/
















