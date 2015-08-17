angular.module("my_world")
    .controller("PeopleEditCtrl", function($scope, $http, $location, $routeParams,PeopleSvc){
        console.log("in PeopleEditCtrl");

        $scope.person = {
        };

        PeopleSvc.getPerson($routeParams.id)
            .then(function (person) {
                $scope.person = person;
            })
            .catch(function (error) {
                $scope.error = error;
            });

        // called on save button on detail page
        $scope.save = function(){
            PeopleSvc.update($scope.person)
                .then( function(person){
                    $location.path("/people");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
    });