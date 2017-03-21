angular.module('bas.my-directive', []).
  directive('basicDirective', function () {
    // implementation goes here
        return {
            restrict: 'E',
            template: '<h1>I made a directive!</h1>'
        };
  });