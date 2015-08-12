var app = angular.module("my_world", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
   $routeProvider 
    .when("/", {
        controller: 'HomeCtrl',
        templateUrl: '/templates/home.html'
    })
    .when("/things", {
        controller: 'ThingsCtrl',
        templateUrl: '/templates/things.html'
    })
    .when("/things/new", {
        controller: 'ThingsNewCtrl',
        templateUrl: '/templates/things_new.html'
    })
   .when("/things/thing:thingId", {
       controller: "ThingsEditCtrl",
       templateUrl:  "/templates/things_edit.html"
   })
    .when("/people", {
        controller: 'PeopleCtrl',
        templateUrl: '/templates/people.html'
    })
       .otherwise({
           redirectTo: '/'
       });


    $locationProvider.html5Mode(true);
});

app.run([
    '$rootScope',
    function($rootScope) {
        // see what's going on when the route tries to change
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // next is an object that is the route that we are starting to go to
            // current is an object that is the route where we are currently
            var junk = 1;
          var currentPath = current.$$route.templateUrl;
           var nextPath = next.$$route.templateUrl;

          console.log('Starting to leave %s to go to %s', currentPath, nextPath);
        });
    }
]);
