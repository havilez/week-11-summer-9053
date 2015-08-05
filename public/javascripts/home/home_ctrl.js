angular.module("my_world")
    .controller('HomeCtrl', function($scope){
       $scope.message = "Welcome to My World. " + new Date();
    });