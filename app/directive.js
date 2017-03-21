angular.module('your-name.my-directive', []).
  directive('btfMyDirective', function () {
    // implementation goes here
        return {
            restrict: 'E',
            template: '<h1>I made a directive!</h1>'
        };
  });