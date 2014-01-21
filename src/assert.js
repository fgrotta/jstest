var App = App || {};

App.Assert = (function(App) {
    var assertions = {
        isTrue : function(exp) {
            return exp === true;
        },

        isFalse : function(exp) {
            return exp === false;
        },

        isNull : function(exp) {
            return exp === null;
        },

        isUndefined : function(exp) {
            return typeof exp === "undefined";
        },

        isDefined : function(exp) {
            return exp != null;
        },

        areEquals : function(expected, actual) {
            return expected === actual;
        },

        areNotEquals : function(expected, actual) {
            return !this.assertEquals(expected, actual);
        },

        arraysAreEquals : function(expected, actual) {
            if(expected.length !== actual.length) {
                return false;
            }
            if(expected.length === 0) {
                return true;
            }
            if(expected[0] !== actual[0]) {
                return false;
            }
            console.log(expected, actual);
            return this.assertArraysEquals(expected.slice(1), actual.slice(1));
        },

        arraysAreNotEquals : function(expected, actual) {
            return !this.assertArraysEquals(expected, actual);
        }
    };

    return {
        assert : function(name) {
            var args = Array.prototype.slice.call(arguments, 1) || [];
            if(typeof assertions[name] !== "function") {
                throw "Unexisting assertion: " + name;
            }
            if(args.length !== assertions[name].length) {
                throw "Assertion called with wrong parameters number: " + name + ". Expected: " + assertions[name].length + ", actual: " + args.length;
            }
            if(assertions[name].apply(assertions, args) === false) {
                throw "Assertion error: " + name + ", argument" + (args.length === 1 ? ": " : "s: ") + args;
            }
            return true;
        }
    };
}) (App);