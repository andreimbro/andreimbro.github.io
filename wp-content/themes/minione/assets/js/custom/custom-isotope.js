jQuery(document).ready(function( $ ) {
 "use strict";
 
		$('#masonry-grid').isotope({
		  // options...
		  itemSelector: '.grid-item',
		  masonry: {
		    columnWidth: 200
		  }
		});

});