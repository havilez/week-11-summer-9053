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
   .when("/things/:Id", {
       controller: "ThingsEditCtrl",
       templateUrl:  "/templates/things_edit.html"
   })
    .when("/people", {
        controller: 'PeopleCtrl',
        templateUrl: '/templates/people.html'
    })
   .when("/people/new", {
       controller: 'PeopleNewCtrl',
       templateUrl: '/templates/people_new.html'
   })
   .otherwise({
       redirectTo: '/'
   });


  //  $locationProvider.html5Mode(true);
});

app.run([
    '$rootScope',
    function($rootScope) {
        // see what's going on when the route tries to change
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // next is an object that is the route that we are starting to go to
            // current is an object that is the route where we are currently
            var junk = 1;
            var currentPath = (current && current.$$route ) ? current.$$route.templateUrl : ' currentPath not set';
            var nextPath = (next  && next.$$route ) ? next.$$route.templateUrl : 'nextPath not set';

            console.log('Starting to leave %s to go to %s', currentPath, nextPath);
        });
    }
]);
