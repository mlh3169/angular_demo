'use strict';

var _ = require('lodash');
var Scope = require('../src/scope');
// var chai = require('chai');
// var expect = chai.expect;

describe('Scope', function () {
  it('can be constructed and used as an object', function () {
    var scope = new Scope();
    scope.aProperty = 1;

    expect(scope.aProperty).toBe(1);
  });

  describe('digest', function () {
    // var scope;

    // beforeEach(function () {
    //   scope = new Scope();
    // });

    // it('calls the listener function of a watch on first $digest',
    //   function () {
    //     var watchFn = function () { return 'wat'; };
    //     var listenerFn = jasmine.createSpy();
    //     scope.$watch(watchFn, listenerFn);

    //     scope.$digest();

    //     expect(listenerFn).toHaveBeenCalled();
    //   }
    // );
    // it('calls the watch function with the scope as the argument',
    //   function () {
    //     var watchFn = jasmine.createSpy();
    //     var listenerFn = function () { };
    //     scope.$watch(watchFn, listenerFn);
    //     scope.$digest();
    //     expect(watchFn).toHaveBeenCalledWith(scope);
    //   }
    // );
    // it('calls the listener function when the watched value changes',
    //   function () {
    //     scope.someValue = 'a';
    //     scope.counter = 0;

    //     scope.$watch(
    //       function (scope) { return scope.someValue; },
    //       function (newValue, oldValue, scope) { scope.counter++; }
    //     );
    //     expect(scope.counter).toBe(0);

    //     scope.$digest();
    //     expect(scope.counter).toBe(1);

    //     scope.$digest();
    //     expect(scope.counter).toBe(1);

    //     scope.someValue = 'b';
    //     expect(scope.counter).toBe(1);

    //     scope.$digest();
    //     expect(scope.counter).toBe(2);

    //   }
    // );
    // it('calls listener when watch value is first undefined',
    //   function () {
    //     scope.counter = 0;
    //     scope.$watch(
    //       function (scope) { return scope.someValue; },
    //       function (newValue, oldValue, scope) { scope.counter++; }
    //     );

    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('calls listener when new value as old value the first time',
    //   function () {
    //     scope.someValue = 123;
    //     var oldValueGiven;

    //     scope.$watch(
    //       function (scope) { return scope.someValue; },
    //       function (newValue, oldValue, scope) { oldValueGiven = oldValue; }
    //     );

    //     scope.$digest();
    //     expect(oldValueGiven).toBe(123);
    //   }
    // );
    // it('may have watchers that omit the listener function',
    //   function () {
    //     var watchFn = jasmine.createSpy().and.returnValue('something');
    //     scope.$watch(watchFn);
    //     scope.$digest();

    //     expect(watchFn).toHaveBeenCalled();
    //   }
    // );
    // it('triggers chained watcher in the same digest',
    //   function () {
    //     scope.name = 'Jane';
    //     scope.$watch(
    //       function (scope) { return scope.nameUpper; },
    //       function (newValue, oldValue, scope) {
    //         if (newValue) {
    //           scope.initial = newValue.substring(0, 1) + '.';
    //         }
    //       }
    //     );
    //     scope.$watch(
    //       function (scope) { return scope.name; },
    //       function (newValue, oldValue, scope) {
    //         if (newValue) {
    //           scope.nameUpper = newValue.toUpperCase();
    //         }
    //       }
    //     );

    //     scope.$digest();
    //     expect(scope.initial).toBe('J.');

    //     scope.name = 'Bob';
    //     scope.$digest();
    //     expect(scope.initial).toBe('B.');
    //   }
    // );
    // it('gives up on watchers after 10 iterations',
    //   function () {
    //     scope.counterA = 0;
    //     scope.counterB = 0;
    //     scope.$watch(
    //       function (scope) { return scope.counterA; },
    //       function (newValue, oldValue, scope) {
    //         scope.counterB++;
    //       }
    //     );
    //     scope.$watch(
    //       function (scope) { return scope.counterB; },
    //       function (newValue, oldValue, scope) {
    //         scope.counterA++;
    //       }
    //     );
    //     expect((function () { scope.$digest(); })).toThrow();
    //   }
    // );
    // it('end the digest when the last watch is clear',
    //   function () {
    //     scope.array = _.range(100);
    //     var watchExecutions = 0;
    //     _.times(100, function (i) {
    //       scope.$watch(
    //         function (scope) {
    //           watchExecutions++;
    //           return scope.array[i];
    //         },
    //         function (newValue, oldValue, scope) { }
    //       );
    //     });
    //     scope.$digest();
    //     expect(watchExecutions).toBe(200);
    //     scope.array[0] = 420;
    //     scope.$digest();
    //     expect(watchExecutions).toBe(301);
    //   }
    // );
    // it('does not end digest so that new watches are not run',
    //   function () {
    //     scope.aValue = 'abc';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function (scope) { return scope.aValue; },
    //       function (newValue, oldValue, scope) {
    //         scope.$watch(
    //           function (scope) { return scope.aValue; },
    //           function (newValue, oldValue, scope) {
    //             scope.counter++;
    //           }
    //         );
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('compares based on value if enabled',
    //   function () {
    //     scope.aValue = [1, 2, 3];
    //     scope.counter = 0;
    //     scope.$watch(
    //       function (scope) { return scope.aValue; },
    //       function (newValue, oldValue, scope) {
    //         scope.counter++;
    //       },
    //       true
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);

    //     scope.aValue.push(4);
    //     scope.$digest();
    //     expect(scope.counter).toBe(2);
    //   }
    // );
    // it('correctly handles NaNs',
    //   function () {
    //     scope.number = 0 / 0; //NaN
    //     scope.counter = 0;
    //     scope.$watch(
    //       function (scope) { return scope.number; },
    //       function (newValue, oldValue, scope) {
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('catches exceptions in watch functions and continues',
    //   function(){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function(scope){ throw 'Error'; },
    //       function(newValue, oldValue, scope){}
    //     );
    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('catches exceptions in listener functions and continus',
    //   function(){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         throw 'Error';
    //       }
    //     );
    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('allows destroying a $watch with a removal function',
    //   function(){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;

    //     var destroyWatch = scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //     scope.aValue = 'def';
    //     scope.$digest();
    //     expect(scope.counter).toBe(2);
    //     scope.aValue = 'ghi';
    //     destroyWatch();
    //     scope.$digest();
    //     expect(scope.counter).toBe(2);
    //   }
    // );
    // it('allows destroying a $watch during digest',
    //   function(){
    //     scope.aValue = 'abc';
    //     var watchCalls = [];
    //     scope.$watch(
    //       function(scope){
    //         watchCalls.push('first');
    //         return scope.aValue;
    //       }
    //     );
    //     var destroyWatch = scope.$watch(
    //       function(scope){
    //         watchCalls.push('second');
    //         destroyWatch();
    //       }
    //     );
    //     scope.$watch(
    //       function(scope){
    //         watchCalls.push('third');
    //         return scope.aValue;
    //       }
    //     );
    //     scope.$digest();
    //     expect(watchCalls).toEqual(['first', 'second', 'third', 'first', 'third']);
    //   }
    // );
    // it('allows a $watch to destroy another during digest',
    //   function(){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function(scope){
    //         return scope.aValue;
    //       },
    //       function(newValue, oldValue, scope){
    //         destroyWatch();
    //       }
    //     );
    //     var destroyWatch = scope.$watch(
    //       function(scope){},
    //       function(newValue, oldValue, scope){}
    //     );
    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //   }
    // );
    // it('allows destroying several $watches during digest',
    //   function(){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;

    //     var destroyWatch1 = scope.$watch(
    //       function(scope){
    //         destroyWatch1();
    //         destroyWatch2();
    //       }
    //     );

    //     var destroyWatch2 = scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );

    //     scope.$digest();
    //     expect(scope.counter).toBe(0);
    //   }
    // );


  });

  describe('$eval', function () {
    // var scope;
    // beforeEach(function () {
    //   scope = new Scope();
    // });

    // it('executes $evaled function and returns result',
    //   function(){
    //    scope.aValue = 42;
    //    var result = scope.$eval(function(scope){
    //      return scope.aValue;
    //    });
    //    expect(result).toBe(42);
    //   }
    // );

    // it('passes the second $eval argument straight through',
    //   function(){
    //     scope.aValue = 42;
    //     var result = scope.$eval(function(scope, arg){
    //       return scope.aValue + arg;
    //     },2);

    //     expect(result).toBe(44);
    //   }
    // );

  });

  describe('$apply', function() {
    // var scope;
    // beforeEach(function(){
    //   scope = new Scope();
    // });

    // it('executes the given function and starts the digest',
    //   function(){
    //     scope.aValue = 'someValue';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function(scope){
    //         return scope.aValue;
    //       },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );
    //     scope.$digest();
    //     expect(scope.counter).toBe(1);
    //     scope.$apply(function(scope){
    //       scope.aValue = 'someOtherValue';
    //     });
    //     expect(scope.counter).toBe(2);
    //   }
    // );
  });

  describe('$evalAsync', function(){
    // var scope;
    // beforeEach(function(){
    //   scope = new Scope();
    // });

    // it('executes given function later in the same circle',
    //   function(){
    //     scope.aValue = [1,2,3];
    //     scope.asyncEvaluated = false;
    //     scope.asyncEvaluatedImmediately = false;

    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.$evalAsync(function(scope){
    //           scope.asyncEvaluated = true;
    //         });
    //         scope.asyncEvaluatedImmediately = scope.asyncEvaluated;
    //       }
    //     );

    //     scope.$digest();
    //     expect(scope.asyncEvaluated).toBe(true);
    //     expect(scope.asyncEvaluatedImmediately).toBe(false);
    //   }
    // );

    // it('executes $evalAsynced functions added by watch functions',
    //   function(){
    //     scope.aValue = [1,2,3];
    //     scope.asyncEvaluated = false;

    //     scope.$watch(
    //       function(scope){
    //         if(!scope.asyncEvaluated){
    //           scope.$evalAsync(function(scope){
    //             scope.asyncEvaluated = true;
    //           });
    //         }
    //         return scope.aValue;
    //       },
    //       function(newValue, oldValue, scope){}
    //     );
    //     scope.$digest();
    //     expect(scope.asyncEvaluated).toBe(true);
    //   }
    // );

    // it('executes $evalAsynced functions even when not dirty',
    //   function(){
    //    scope.aValue = [1,2,3];
    //    scope.asyncEvaluatedTimes = 0;

    //    scope.$watch(
    //      function(scope){
    //        if(scope.asyncEvaluatedTimes<2){
    //         scope.$evalAsync(function(scope){
    //           scope.asyncEvaluatedTimes++;
    //         });
    //        }
    //        return scope.aValue;
    //      },
    //      function(newValue, oldValue, scope){}
    //    );
    //    scope.$digest();
    //    expect(scope.asyncEvaluatedTimes).toBe(2);
    //   }
    // );

    // it('eventually halts $evalAsyncs added by watchse',
    //   function(){
    //     scope.aValue = [1,2,3];
    //     scope.$watch(
    //       function(scope){
    //         scope.$evalAsync(function(scope){});
    //         return scope.aValue;
    //       },
    //       function(newValue, oldValue, scope){}
    //     );
    //     expect(function() {scope.$digest();}).toThrow();
    //   }
    // );

    // it('has a $$phase field whose value is the current digest phase',
    //   function(){
    //     scope.aValue = [1,2,3];
    //     scope.phaseInWatchFunction = undefined;
    //     scope.phaseInListenerFunction = undefined;
    //     scope.phaseInApplyFunction = undefined;

    //     scope.$watch(
    //       function(scope){
    //         scope.phaseInWatchFunction = scope.$$phase;
    //         return scope.aValue;
    //       },
    //       function(newValue, oldValue, scope){
    //         scope.phaseInListenerFunction = scope.$$phase;
    //       }
    //     );

    //     scope.$apply(function(scope){
    //       scope.phaseInApplyFunction = scope.$$phase;
    //     });

    //     expect(scope.phaseInWatchFunction).toBe('$digest');
    //     expect(scope.phaseInListenerFunction).toBe('$digest');
    //     expect(scope.phaseInApplyFunction).toBe('$apply');
    //   }
    // );

    // it('schedules a digest in $evalAsync',
    //   function(done){
    //     scope.aValue = 'abc';
    //     scope.counter = 0;
    //     scope.$watch(
    //       function(scope){ return scope.aValue; },
    //       function(newValue, oldValue, scope){
    //         scope.counter++;
    //       }
    //     );

    //     scope.$evalAsync(function(scope){});

    //     expect(scope.counter).toBe(0);
    //     setTimeout(function(){
    //       expect(scope.counter).toBe(1);
    //       done();
    //     },50);
    //   }
    // );

    // it('catches exceptions in $evalAsync', function(done){
    //   scope.aValue = 'abc';
    //   scope.counter = 0;
    //   scope.$watch(
    //     function(scope){ return scope.aValue; },
    //     function(newValue, oldValue, scope){
    //       scope.counter++;
    //     }
    //   );

    //   scope.$evalAsync(function(scope){
    //     throw 'Error';
    //   });

    //   setTimeout(function(){
    //     expect(scope.counter).toBe(1);
    //     done();
    //   }, 50);
    // });
  });

  describe('$applyAsync', function(){
    // var scope;
    // beforeEach(function(){
    //   scope = new Scope();
    // });
    // it('allows async $apply with $applyAsync', function(done){
    //   scope.counter = 0;
    //   scope.$watch(
    //     function(scope){ return scope.aValue; },
    //     function(newValue, oldValue, scope){
    //       scope.counter++;
    //     }
    //   );

    //   scope.$digest();
    //   expect(scope.counter).toBe(1);

    //   scope.$applyAsync(function(scope){
    //     scope.aValue = 'abc';
    //   });
    //   expect(scope.counter).toBe(1);
    //   setTimeout(function(){
    //     expect(scope.counter).toBe(2);
    //     done();
    //   },50);
    // });

    // it('never executes $applyAsynced function in the same circle', function(done){
    //   scope.aValue = [1,2,3];
    //   scope.asyncApplied = false;

    //   scope.$watch(
    //     function(scope){ return scope.aValue; },
    //     function(newValue, oldValue, scope){
    //       scope.$applyAsync(function(scope){
    //         scope.asyncApplied = true;
    //       });
    //     }
    //   );
    //   scope.$digest();
    //   expect(scope.asyncApplied).toBe(false);
    //   setTimeout(function(){
    //     expect(scope.asyncApplied).toBe(true);
    //     done();
    //   },50);
    // });

    // it('coalesces many calls to $applyAsync', function(done){
    //   scope.counter = 0;
    //   scope.$watch(
    //     function(){
    //       scope.counter++;
    //       return scope.aValue;
    //     },
    //     function(newValue, oldValue, scope){}
    //   );

    //   scope.$applyAsync(function(scope){
    //     scope.aValue = 'abc';
    //   });
    //   scope.$applyAsync(function(scope){
    //     scope.aValue = 'def';
    //   });
    //   setTimeout(function(){
    //     expect(scope.counter).toBe(2);
    //     done();
    //   },50);
    // });

    // it('catches exceptions in $applyAsync', function(done){
    //   scope.$applyAsync(function(scope){
    //     throw 'Error';
    //   });
    //   scope.$applyAsync(function(){
    //     throw 'Error';
    //   });
    //   scope.$applyAsync(function(){
    //     scope.applied = true;
    //   });

    //   setTimeout(function(){
    //     expect(scope.applied).toBe(true);
    //     done();
    //   }, 50);
    // });

  });

  describe('$postDigest', function(){
    // var scope;
    // beforeEach(function(){
    //   scope = new Scope();
    // });
    // it('runs after each digest', function(){
    //   scope.counter = 0;
    //   scope.$$postDigest(function(){
    //     scope.counter++;
    //   });
    //   expect(scope.counter).toBe(0);
    //   scope.$digest();
    //   expect(scope.counter).toBe(1);
    //   scope.$digest();
    //   expect(scope.counter).toBe(1);
    // });

    // it('catches exceptions in $$postDigest', function(){
    //   var didRun = false;
    //   scope.$$postDigest(function(){
    //     throw 'Error';
    //   });
    //   scope.$$postDigest(function(){
    //     didRun = true;
    //   });

    //   scope.$digest();
    //   expect(didRun).toBe(true);
    // });

  });


  describe('$watchGroup', function(){

    // var scope;
    // beforeEach(function(){
    //   scope = new Scope();
    // });

    // it('takes watches as an array and calls listener with arrays', function(){
    //   var goNewValues, goOldValues;
    //   scope.aValue = 1;
    //   scope.anotherValue = 2;
    //   scope.$watchGroup([
    //       function(scope){ return scope.aValue; },
    //       function(scope){ return scope.anotherValue; }
    //     ],
    //     function(newValue, oldValue, scope){
    //       goNewValues = newValue;
    //       goOldValues = oldValue;
    //     }
    //   );
    //   scope.$digest();
    //   expect(goNewValues).toEqual([1,2]);
    //   expect(goOldValues).toEqual([1,2]);
    // });

    // it('only calls listener once per digest', function(){
    //   var counter = 0;
    //   scope.aValue = 1;
    //   scope.anotherValue = 2;
    //   scope.$watchGroup([
    //     function(scope){ return scope.aValue; },
    //     function(scope){ return scope.anotherValue; }
    //   ],function(newValue, oldValue, scope){
    //     counter++;
    //   });
    //   scope.$digest();

    //   expect(counter).toEqual(1);
    // });

    // it('uses the same array of old and new values on first run', function(){
    //   var goNewValues, goOldValues;
    //   scope.aValue = 1;
    //   scope.anotherValue = 2;
    //   scope.$watchGroup([
    //     function(scope){ return scope.aValue },
    //     function(scope){ return scope.anotherValue }
    //   ], function(newValues, oldValues, scope){
    //     goNewValues = newValues;
    //     goOldValues = oldValues;
    //   });
    //   scope.$digest();

    //   expect(goNewValues).toBe(goOldValues);
    // });

    // it('uses different arrays for old and new values on subsequent runs', function(){
    //   var goNewValues, goOldValues;
    //   scope.aValue = 1;
    //   scope.anotherValue = 2;
    //   scope.$watchGroup([
    //     function(scope){ return scope.aValue; },
    //     function(scope){ return scope.anotherValue; }
    //   ],function(newValues, oldValues, scope){
    //     goNewValues = newValues;
    //     goOldValues = oldValues;
    //   });
    //   scope.$digest();
    //   scope.anotherValue = 3;
    //   scope.$digest();

    //   expect(goNewValues).toEqual([1,3]);
    //   expect(goOldValues).toEqual([1,2]);
    // });

    // it('calls the listener once when the watch array is empty', function(){
    //   var goNewValues, goOldValues;

    //   scope.$watchGroup([], function(newValues, oldValues, scope){
    //     goNewValues = newValues;
    //     goOldValues = oldValues;
    //   });
    //   scope.$digest();
    //   expect(goNewValues).toEqual([]);
    //   expect(goOldValues).toEqual([]);
    // });

    // it('can be deregistered', function(){
    //   var counter = 0;
    //   scope.aValue = 1;
    //   scope.anotherValue = 2;
    //   var destroyGroup = scope.$watchGroup([
    //     function(scope){ return aValue; },
    //     function(scope){ return anotherValue; }
    //   ], function(newValues, oldValues, scope){
    //     counter++;
    //   });
    //   scope.$digest();
    //   scope.anotherValue = 3;
    //   destroyGroup();
    //   scope.$digest();
    //   expect(counter).toEqual(1);
    // });

    // it('does not call the zero-width listener when deregistered first', function(){
    //   var counter = 0;
    //   var destroyGroup = scope.$watchGroup([], function(newValues, oldValues, scope){
    //     counter++;
    //   });
    //   destroyGroup();
    //   scope.$digest();
    //   expect(counter).toEqual(0);
    // });
    
  });

  describe('inheritance', function(){
    it('inherits the parents porperities', function(){
      var parent = new Scope();
      parent.aValue = [1,2,3];
      var child = parent.$new();
      expect(child.aValue).toEqual([1,2,3]);
    });

    it('does not cause a parent to inherit its properities', function(){
      var parent = new Scope();
      var child = parent.$new();
      child.aValue = [1,2,3];
      expect(parent.aValue).toBeUndefined();
    });

    it('inherits the parents properties whenever they are defined', function(){
      var parent = new Scope();
      var child = parent.$new();
      parent.aValue = [1,2,3];
      expect(child.aValue).toEqual([1,2,3]);
    });

    it('can manipulate a parent scopes property', function(){
      var parent = new Scope();
      var child = parent.$new();
      parent.aValue = [1,2,3];
      child.aValue.push(4);

      expect(child.aValue).toEqual([1,2,3,4]);
      expect(parent.aValue).toEqual([1,2,3,4]);
    });

    it('can watch a property in the parent', function(){
      var parent = new Scope();
      var child = parent.$new();
      parent.aValue = [1,2,3];
      child.counter = 0;

      child.$watch(
        function(scope){
          return scope.aValue;
        },
        function(newValue, oldValue, scope){
          scope.counter++;
        },
        true
      );

      child.$digest();
      expect(child.counter).toBe(1);

      parent.aValue.push(4);
      child.$digest();
      expect(child.counter).toBe(2);
    });

    it('can be nested at the depth', function(){
      var a = new Scope();
      var aa = a.$new();
      var aaa = aa.$new();
      var aab = aaa.$new();
      var ab = aab.$new();
      var abb = ab.$new();

      a.value = 1;
      expect(aa.value).toBe(1);
      expect(aaa.value).toBe(1);
      expect(aab.value).toBe(1);
      expect(ab.value).toBe(1);
      expect(abb.value).toBe(1);

      ab.anotherValue = 2;
      expect(abb.anotherValue).toBe(2);
      expect(aa.anotherValue).toBeUndefined();
      expect(aaa.anotherValue).toBeUndefined();
    });

    it('shadows a parents porperty with the same name', function(){
      var parent = new Scope();
      var child = parent.$new();
      parent.name = 'Joe';
      child.name = 'Jill';
      expect(child.name).toBe('Jill');
      expect(parent.name).toBe('Joe');
    });

    it('can be nested at any depth', function(){
      var a = new Scope();
      var aa = a.$new();
      var aaa = aa.$new();
      var aab = aa.$new();
      var ab = a.$new();
      var abb = ab.$new();

      a.value = 1;
      expect(aa.value).toBe(1);
      expect(aaa.value).toBe(1);
      expect(aab.value).toBe(1);
      expect(ab.value).toBe(1);
      expect(abb.value).toBe(1);

      ab.anotherValue = 2;
      expect(abb.anotherValue).toBe(2);
      expect(aa.anotherValue).toBeUndefined();
      expect(aaa.anotherValue).toBeUndefined();
    });

    it('does not shadow members of parent scopes attributes', function(){
      var parent = new Scope();
      var child = parent.$new();
      parent.user = {name: 'jack'};
      child.user = {name:'Jill'};

      expect(parent.user.name).toBe('jack');
      expect(child.user.name).toBe('Jill');
    });

    // it('does not digest its parent(s)', function(){
    //   var parent = new Scope();
    //   var child = parent.$new();
    //   parent.aValue = 'abc';
    //   parent.$watch(
    //     function(scope){
    //       return scope.aValue;
    //     },
    //     function(oldValue, newValue, scope){
    //       scope.aValueWas = newValue;
    //     }
    //   );
    //   child.$digest();
    //   expect(child.aValueWas).toBeUndefined();
    // });



  });

});


