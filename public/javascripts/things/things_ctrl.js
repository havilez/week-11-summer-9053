angular.module("my_world")
    .controller("ThingsCtrl", function($http, $scope){
        $http.get("/api/things/")
            .then(function(response){
                $scope.things = response.data;
            });
        
    });