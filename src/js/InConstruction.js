define(['Util', 'text!tpl/systemConstruction/systemConstruction.tpl.hbs'], function(Util,tpl) {
	var $el = null;
	var initialize = function() {
		$el = $(tpl);
		this.content = $el;
	};
	return initialize;
});