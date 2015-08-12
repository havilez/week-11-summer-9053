angular.module("my_world")
    .controller("PeopleCtrl", function($scope, PeopleSvc){
        console.log("PeopleCtrl");
        PeopleSvc.getPeople()
            .then( function(people){
                $scope.people = people;
            })
    });