var App = App || {};

App.Mock = (function() {
	function Mock() {

		this.createMock = function(constructor) {
			/* should get an instance with each method substituted by a method with an associated counter, so for example:
			    var service = App.Mock.createMock(PippoService);
			    service.getPluto();
			    service.getPluto();
			    service.getPluto();
			    service.getPluto.getNCalled --> 3
			    service.getTopolino();
			    service.getTopolino.getNCalled --> 1
			 */
		};
	}
	
	return new Mock();
}) (App);