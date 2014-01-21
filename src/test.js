var App = App || {};

App.Test = (function (App) {
	function Test() {

		var BEFORE_CLASS = "beforeClass";
		var BEFORE = "before";
		var TEST = "test";
		var AFTER = "after";
		var AFTER_CLASS = "afterClass";
		var testScopes = [BEFORE_CLASS, BEFORE, TEST, AFTER, AFTER_CLASS];

        function TestResult(module, name, status) {
            this.module = module;
            this.name = name;
            this.status = status;
        }

		this.execTests = function() {
            /* It has to discover the tests under App.Tests, execute them and show the results. See the exampletest.js
                to guess how it is supposed to work.
             */
		};

		this.getResults = function() {
			return { results : [] };
		};
	}
	return new Test();

}) (App);
