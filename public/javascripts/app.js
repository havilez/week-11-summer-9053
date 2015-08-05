var app = angular.module("my_world", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
   $routeProvider 
    .when("/", {
        controller: 'HomeCtrl',
        templateUrl: '/templates/home.html'
    });
});