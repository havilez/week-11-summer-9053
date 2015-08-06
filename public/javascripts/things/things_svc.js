angular.module("my_world")
    .factory("ThingsSvc", function($q, $http){
        console.log("ThingsSvc")
         function getThings(){
             var dfd = $q.defer();
             $http.get("/api/things")
                .then(function(response){
                    dfd.resolve(response.data);
                });
             return dfd.promise;
         }
         return {
             getThings: getThings
         };
    });