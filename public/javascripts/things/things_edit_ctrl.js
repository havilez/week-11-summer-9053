angular.module("my_world")
    .controller("ThingsEditCtrl", function($scope, $http, $location, $routeParams,ThingsSvc){
        console.log("in ThingsEditCtrl");

        $scope.thing = {
        };

        ThingsSvc.getThing($routeParams.id)
            .then(function (thing) {
                $scope.thing = thing;
            })
            .catch(function (error) {
                $scope.error = error;
            });

        // called on save button on detail page
        $scope.save = function(){
            ThingsSvc.update($scope.thing)
                .then( function(thing){
                    $location.path("/things");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
    });