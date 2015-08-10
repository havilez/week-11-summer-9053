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
    .when("/things/new", {
        controller: 'ThingsNewCtrl',
        templateUrl: '/templates/things_new.html'
    })
   .when("/things/edit", {
       controllwer: "ThingsEditCtrl",
       templateUrl:  "/templates/things_edit.html"
   })
    .when("/people", {
        controller: 'PeopleCtrl',
        templateUrl: '/templates/people.html'
    });
    $locationProvider.html5Mode(true);
});