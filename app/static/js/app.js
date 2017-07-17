var heatDeathApp = angular.module('heatDeathApp', ['ngSanitize']);

heatDeathApp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);
