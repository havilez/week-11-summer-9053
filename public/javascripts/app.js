var app = angular.module("my_world", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
   $routeProvider 
    .when("/", {
        controller: 'HomeCtrl',
        templateUrl: '/templates/home.html'
    })
    .when("/things", {
        controller: 'ThingsCtrl',
        templateUrl: '/templates/things.html'
    })
    .when("/people", {
        controller: 'PeopleCtrl',
        templateUrl: '/templates/people.html'
    });
    $locationProvider.html5Mode(true);
});