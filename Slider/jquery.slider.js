
(function($){
	var defaults = {
		speed: 5000,
		text: '',
		textPosition: bottom,
		color: 'blue'
	};
	
	var methods = {
		init : function(message, options){
			var _self = this;
			$.extend(defaults, defaults, options);
			
			return _self.each(function(){
				methods._startSlide(this,message);
			});
		},
		_startSlide: function(elem, message){
			$(elem).text(message);
			$(elem).css('color', defaults.color);
		}
	};
	
	//Setting up the plugin
	$.fn.slider = function(message, options){
		return methods.init.apply(this, arguments);
	};
	
})(jQuery);
