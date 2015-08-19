angular.module("my_world")
    .controller("PeopleCtrl", function($scope, PeopleSvc){
        console.log("PeopleCtrl");

        function activate(){
            PeopleSvc.getPeople()
                .then( function(people){
                    $scope.people = people;
                })
        }



        $scope.delete = function(thing){
            PeopleSvc.delete(thing)
                .then( function(thing){
                    activate();
                })
                .catch(function(error){
                    $scope.error = error;
                });
        };

        activate();
    });