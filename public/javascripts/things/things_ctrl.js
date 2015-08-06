angular.module("my_world")
    .controller("ThingsCtrl", function($scope, ThingsSvc){
        console.log("ThingsCtrl");
        ThingsSvc.getThings()
            .then( function(things){
                $scope.things = things;
            })
    });