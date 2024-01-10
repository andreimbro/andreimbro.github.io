/*
* Theme Name: Mini
* File name: script.js
* Theme URL: http://klbtheme.com/kulebe
* Description: Mini - Onepage Personal Portfolio
* Author: KlbTheme
* Author URL: http://themeforest.net/user/klbtheme
* Support: https://sinanisik.ticksy.com/
* Version: 1.0
*/

jQuery.noConflict();
(function ($) {
  "use strict";
  
	//Run function when document ready
	$(document).ready(function () {
		init_mobilemenu();
		init_imagemodal();    
		init_imagepopup();
		init_videopopup();
		init_cacheselector();
		init_parallax();
		init_wow();
	});

	//Start window load function strict mode
	$(window).load(function() { 
		$(".spinner").delay(400).fadeOut("slow");
		$(".title-load").delay(400).fadeOut("slow");
		$("#loader").delay(800).fadeOut("slow"); 
	});


	//Window resize
	$(window).resize(function() {

		// Full height page - minus "header" and "footer" height
		$('.klberror').innerHeight($(window).height() - $('#header').innerHeight() - $('footer').innerHeight() - $('#wpadminbar').innerHeight()); 

	}).resize();

	
	function init_mobilemenu() {
		$(document).on('click','.navbar-collapse.in',function(e) {
		    if( $(e.target).is('a') ) {
		        $(this).collapse('hide');
		    }
		});
    }

    // Magnific Image Modal
	function init_imagemodal() {
		$('.image-modal').magnificPopup({

			type:'inline',
			fixedContentPos: false,
			removalDelay: 100,
			closeBtnInside: true,
			preloader: false,
			mainClass: 'mfp-fade',
			gallery: {
			  enabled: true, // set to true to enable gallery
			
			  preload: [0,2], // read about this option in next Lazy-loading section
			
			  navigateByImgClick: true,
			
			  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
			
			  tPrev: 'Previous (Left arrow key)', // title for left button
			  tNext: 'Next (Right arrow key)', // title for right button
			  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			},
		});


		$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefaut();
		$.magnificPopup.close();
		});
	}
	
    // Magnific Image Popup
	function init_imagepopup() {
        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },

          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });
	}
	
    // Magnific Video Popup
	function init_videopopup() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
	}
	
    // Cache selectors
	function init_cacheselector() {
		var lastId,
			topMenu = $(".navbar-collapse"),
			topMenuHeight = topMenu.outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a.internal"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			  var item = $($(this).attr("href"));
			  if (item.length) { return item; }
			});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
			  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		  $('html, body').stop().animate({ 
			  scrollTop: offsetTop
		  }, 900);
		  e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
			   lastId = id;
			   // Set/remove active class
			   menuItems
				 .parent().removeClass("active")
				 .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }                   
		});
	}
	
	function init_parallax() {
		$('#sectionIntro').parallax({ "coeff":+0.5 });
		$('.imageIntro').parallax({ "coeff":+0.4 });
	}
	
	function init_wow() {
	  new WOW().init();
	}
})(jQuery);






