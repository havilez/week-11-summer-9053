angular.module("my_world")
    .factory("PeopleSvc", function($q, $http){
         function getPeople(){
             var dfd = $q.defer();
             $http.get("/api/people")
                .then(function(response){
                    dfd.resolve(response.data);
                });
             return dfd.promise;
         }
         
         function save(person){
             var dfd = $q.defer();
             $http.post("/api/people", person)
                .then( function(person){
                   dfd.resolve(person.data);
                })
                .catch( function(err){
                    dfd.reject(err.data);  
                });
             return dfd.promise;
             
         }
        function getPerson( id )
        {
            var dfd = $q.defer();
            $http.get("/api/people/"+id)
                .then(function(person){
                     dfd.resolve(person.data);
                })
                .catch( function(err){
                    dfd.reject(err.data);
                })

            return dfd.promise;
        }
        function update(person){
            var dfd = $q.defer();
            $http.put("/api/people/" + person._id ,person)
                .then( function(_person){
                    dfd.resolve(_person);
                })
                .catch( function(err){
                    dfd.reject(err.data);
                });
            return dfd.promise;

        }

        function deletePerson( person )
        {
            var dfd = $q.defer();
            $http.delete("/api/people/"+person._id)
                .then(function(resp){
                    dfd.resolve(resp.data);
                })
                .catch( function(err){
                    dfd.reject(err.data);
                })

            return dfd.promise;
        }

         return {
             getPeople: getPeople,
             save: save,
             getPerson: getPerson,
             update: update,
             delete: deletePerson,
         };
    });