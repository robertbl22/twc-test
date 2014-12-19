'use strict';

angular.module('twcTestApp', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.greetMe = 'World';
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['twcTestApp']);
});