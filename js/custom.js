$(document).ready(function(){


	$("#mobile-menu").meanmenu({
		meanMenuContainer:'.mobile-menu',
		meanScreenWidth:'767'
	});




		// brand
	$('.brand-active').owlCarousel({
		items:5,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		autoplayTimeout:5000
	});





	// Slider
	$('.slider-active').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:5000
	});





	// Isotop

    $(".portfolio-nav li").on('click',function(){
        $(".portfolio-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $ (this).attr('data-filter');
        $(".portfolio-active").isotope({
            filter:selector
        });
    });



    jQuery(".portfolio-active").isotope();


	

	  
  
/*   Counter up */
	$('.counter').counterUp({
		delay:10,
		time:3000	
	});
	
	
	
	
	
	

});