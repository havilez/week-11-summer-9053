angular.module("my_world")
    .controller("ThingsEditCtrl", function($scope, $http, $location, $routeParams,ThingsSvc){
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
            
            
            $scope.edit = function () {
                ThingsSvc.getThing($routeParams.thingId)
                    .then(function (thing) {
                        $scope.thing = thing;
                    })
                    .catch(function (error) {
                        $scope.error = error;
                    });
                
            }
        }
    });