angular.module("my_world")
    .controller("ThingsCtrl", function($scope, $location, ThingsSvc){
        console.log("ThingsCtrl");

        function activate(){
            ThingsSvc.getThings()
                .then( function(things){
                    $scope.things = things;
                });
        }

        $scope.delete = function(thing){
            ThingsSvc.delete(thing)
                .then( function(thing){
                    activate();
                })
                .catch(function(error){
                    $scope.error = error;
                });
        };


        activate();

    });