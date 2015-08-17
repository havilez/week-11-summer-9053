angular.module("my_world")
    .controller("PeopleNewCtrl", function($scope, $http, $location, PeopleSvc){
        console.log("in PeopleNewCtrl");
        $scope.person = {
        };
        $scope.save = function(){
            PeopleSvc.save($scope.person)
                .then( function(person){
                    $location.path("/people");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
    });