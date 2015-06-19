var transitionApp = angular.module('transitionApp', ['ngAnimate', 'ngRoute']);

transitionApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'partials/view1.html',
            controller: 'view1Controller'
    	})
    	.when('/view2', {
    		templateUrl: 'partials/view2.html',
            controller: 'view2Controller'
    	})
    	.when('/view3', {
    		templateUrl: 'partials/view3.html',
            controller: 'view3Controller'
    	});

});

transitionApp.controller('view1Controller', function($scope) {
    $scope.cssClass = 'view1';
});

transitionApp.controller('view2Controller', function($scope) {
    $scope.cssClass = 'view2';
});

transitionApp.controller('view3Controller', function($scope) {
    $scope.cssClass = 'view3';
});