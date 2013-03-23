
(function($){
	var settings = {
		animationSpeed: 2000,
		timeout: 4000,
	};
	var rotate,
		index = 0,
        visible = {"float": "left", "position": "relative", "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "zIndex": 1};
		
	var methods = {
		init : function(options){
			var _self = $(this);
			$.extend(settings, settings, options);
			
			return _self.each(function(){
				methods._startSlide(_self, this);
			});
		},
		_startSlide: function(context, elem){
			var $slides = context.children(),
				length = $slides.size();
			
			rotate = setInterval(function () {
	            $slides.stop(true, true);

	            var idx = index + 1 < length ? index + 1 : 0;
	            methods._slideItem(context, idx);
            }, settings.timeout);
          },
        _slideItem: function (elem, idx) {
			var $slide = elem.children();
			$slide
			  .stop()
			  .fadeOut(settings.animationSpeed, function () {
				$(this).css(hidden);
			  })
			  .eq(idx)
			  .fadeIn(settings.animationSpeed, function () {
				$(this).css(visible);
				index = idx;
			  });
		},
		_callback: function() {
	        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
	  }
	};
	
	$.fn.slider = function(options){
		return methods.init.apply(this, arguments);
	};
	
})(jQuery);
