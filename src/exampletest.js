var App = App || {};
App.Tests = App.Tests || {};

App.Tests.Example = (function() {
	function Dog(name) {
		this.name = name;
		this.bark = function() {
			return "WOOF! WOOF!";
		}
	}
	
	function Person(name, aggressivityRate) {
		this.name = name;
		this.aggressivityRate = aggressivityRate;
		this.run = function() {
			return "RUN! RUN!!!";
		};
		this.walk = function() {
			return "Walking quietly";
		};
		this.decideIfToRunOrToWalkWhenMeetingSomethingElse = function(other) {
			return typeof other.bark === "function" ?
				this.run() :
				other.aggressivityRate > 50 ?
					this.run() : 
					this.walk();
					
		}
	}
	
	function Meeting(subject1, subject2) {
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.meet = function() {
			console.log(this.subject1.decideIfToRunOrToWalkWhenMeetingSomethingElse(this.subject2));
			console.log(this.subject2.decideIfToRunOrToWalkWhenMeetingSomethingElse(this.subject1));
		}
	}
	
	var pluto, mockedPluto; 
	var paperoga, mockedPaperoga;
	var gambadilegno, mockedGambadilegno;

	function Test(sched) {		
		sched.before('setup', function() {
			console.log('setup');
			pluto = new Dog("Pluto");
			mockedPluto = App.Mock.createMock(Dog);
			
			paperoga = new Person("Paperoga", 10);			
			mockedPaperoga = App.Mock.createMock(Person);
			
			gambadilegno = new Person("Pietro Gambadilegno", 100);
			mockedGambadilegno = App.Mock.createMock(Person);
		});
		
		sched.test('testPaperogaMeetsPluto', function() {
			var assertThat = App.Assert.assert;
			assertThat("areEquals", "RUN! RUN!!!", paperoga.decideIfToRunOrToWalkWhenMeetingSomethingElse(pluto));
		});
		
		sched.test('testGambadilegnoMeetsPluto', function() {
			var assertThat = App.Assert.assert;
			assertThat("areEquals", "RUN! RUN!!!", gambadilegno.decideIfToRunOrToWalkWhenMeetingSomethingElse(pluto));
		});
		
		sched.test('testGambadilegnoAndPaperogaMeetEachOther', function() {
			var assertThat = App.Assert.assert;
			assertThat("areEquals", "Walking quietly", gambadilegno.decideIfToRunOrToWalkWhenMeetingSomethingElse(paperoga));
			assertThat("areEquals", "RUN! RUN!!!", paperoga.decideIfToRunOrToWalkWhenMeetingSomethingElse(gambadilegno));
		});
		
		sched.test('testGambadilegnoAndPaperogaMeetEachOther2', function() {
			var assertThat = App.Assert.assert;
			assertThat("areEquals", "RUN! RUN!!!", gambadilegno.decideIfToRunOrToWalkWhenMeetingSomethingElse(paperoga));
			assertThat("areEquals", "RUN! RUN!!!", paperoga.decideIfToRunOrToWalkWhenMeetingSomethingElse(gambadilegno));
		});
	}
	return Test;
}) (App);