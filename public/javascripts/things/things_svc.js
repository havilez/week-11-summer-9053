angular.module("my_world")
    .factory("ThingsSvc", function($q, $http){
         function getThings(){
             var dfd = $q.defer();
             $http.get("/api/things")
                .then(function(response){
                    dfd.resolve(response.data);
                });
             return dfd.promise;
         }
         
         function save(thing){
             var dfd = $q.defer();
             $http.post("/api/things", thing)
                .then( function(thing){
                   dfd.resolve(thing); 
                })
                .catch( function(err){
                    dfd.reject(err.data);  
                });
             return dfd.promise;
             
         }
         return {
             getThings: getThings,
             save: save
         };
    });