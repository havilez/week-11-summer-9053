angular.module("my_world")
    .controller("ThingsEditCtrl", function($scope, $http, $location, $routeParams,ThingsSvc){
        $scope.thing = {
        };

        editThing();


        // called on save button on detail page
        $scope.save = function(){
            ThingsSvc.save($scope.thing)
                .then( function(thing){
                    $location.path("/things");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
            
            
            $scope.editThing = function () {
                ThingsSvc.getThing($routeParams.Id)
                    .then(function (thing) {
                        $scope.thing = thing;
                    })
                    .catch(function (error) {
                        $scope.error = error;
                    });
                
            }
        }
    });