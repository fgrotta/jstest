var App = App || {};

App.Controller = (function(App) {
	function Controller() {
		
	}
	
	Controller.prototype.render = function(sourceId, targetId, data) {
		(function(source) {
			(function(template) {
				document.getElementById(targetId).innerHTML = template(data);
			}) (Handlebars.compile(source));
		}) (document.getElementById(sourceId).innerHTML);		
	};
	
	Controller.prototype.renderTests = function(result) {
		this.render("testTemplate", "testTarget", result);
	}
	
	Controller.prototype.destroy = function(id) {
		document.getElementById(id).innerHTML = "";
	}
	
	return new Controller();
}) (App);