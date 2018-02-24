/*
Parallax Plugin V 1.0
Author: Nino Zumstein
Date  : 12.09.2016
*/
/*DO NOT USE THIS VERSION OF THE PARALLAX.JS, THIS IS FOR DEMO PURPOSE ONLY*/
(function($) {
	$.fn.parallax = function(options) {
		var parallax_element = this;
		var settings = {
			speed: '100',
			ascending: true,
			delay: '1000'
		};
		if (options) {
			$.extend(settings, options);
		}
		var ad = "+";
		if (!settings['ascending'] == true) {
			var ad = "-";
		}
		$(window).scroll(function() {
			var wScroll = $(this).scrollTop();
			var wScrollB = $(document).height() - $(window).height() - $(window).scrollTop();
			$('.banner .parallax').css({
				"transform": "translate(0px, " + ad + wScroll / settings['speed'] + "%)",
				"transition-duration": settings['delay'] + "ms"
			});
			$('.connect .parallax').css({
				"transform": "translate(0px, -" + (wScrollB / settings['speed'] + 10) + "%)",
				"transition-duration": settings['delay'] + "ms"
			});
			$('.useWay .parallax').css({
				"transform": "translate(0px, " + (wScroll / settings['speed']) + "%)",
				"transition-duration": settings['delay'] + "ms"
			});
		});
	}
}(jQuery));