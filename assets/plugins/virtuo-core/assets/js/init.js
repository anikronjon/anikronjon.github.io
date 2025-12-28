(function($, fnFrontend){
	"use strict";
	
	
	
	var FrenifyVirtuo = {
		
		isAdmin: false,
		adminBarH: 0,
		
		ajaxClicksForAjaxGridPosts: 0,
		
		init: function() {
			
			if($('body').hasClass('admin-bar')){
				FrenifyVirtuo.isAdmin 		= true;
				FrenifyVirtuo.adminBarH 	= $('#wpadminbar').height();
			}

			var widgets = {
				// 'frel-categories.default' : FrenifyVirtuo.categoriesFunction,
			};

			$.each( widgets, function( widget, callback ) {
				fnFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});
		},
		
		// postsTicker: function(){
		// 	$(".TickerNews .marquee").each(function(){
		// 		var e = $(this);
		// 		if(!e.hasClass('ready')){
		// 			e.addClass('ready').marquee({
		// 				duplicated: true,
		// 				duration: parseInt(e.data('speed'))*1000,
		// 				delayBeforeStart: 0,
		// 				direction: 'left',
		// 				pauseOnHover: true,
		// 				startVisible: true
		// 			}).bind('finished', function () {
		// 				FrenifyVirtuo.ImgToSVG();
		// 			});
		// 			FrenifyVirtuo.ImgToSVG();
		// 		}
		// 	});	
		// },
		
	};
	
	$( window ).on( 'elementor/frontend/init', FrenifyVirtuo.init );
	
	
	// $( window ).on('resize',function(){
	// 	FrenifyVirtuo.isotopeFunction();
	// 	setTimeout(function(){
	// 		FrenifyVirtuo.isotopeFunction();
	// 	},700);
	// });
	// $( window ).on('load',function(){
	// 	FrenifyVirtuo.isotopeFunction();
	// });
	
	// $(window).on('scroll',function(){
		
	// });
	
})(jQuery, window.elementorFrontend);