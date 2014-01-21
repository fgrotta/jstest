var App = App || {};

App.Mock = (function() {
    function Mock() {

        function MockedMethod() {
            var nCalled = 0;
            this.getNCalled = function() {
                return nCalled;
            }
            this.invoke = function() {
                nCalled += 1;
            }
        }

        this.createMock = function(constructor) {
            var stub = new constructor();
            for(var i in stub) {
                if(typeof stub[i] === "function") {
                    var mockedMethod = new MockedMethod();
                    stub[i] = mockedMethod.invoke;
                    stub[i].getNCalled = mockedMethod.getNCalled;
                }
            }
            return stub;
        };
    }

    return new Mock();
}) (App);