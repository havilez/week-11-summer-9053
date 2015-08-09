angular.module("my_world")
    .controller("ThingsNewCtrl", function($scope, $http, $location, ThingsSvc){
        $scope.thing = {
        };
        $scope.save = function(){
            ThingsSvc.save($scope.thing)
                .then( function(thing){
                    $location.path("/things");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
    });