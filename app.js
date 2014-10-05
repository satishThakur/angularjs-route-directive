/**
 * Created by satish on 05/10/14.
 */

var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'view1.html'

            }).
            when('/view2', {
                templateUrl: 'view2.html'
            }).
            otherwise({
                redirectTo: '/view1'
            });
    }]);


app.directive('view1Data', function(){
    return {
        restrict : 'E',
        templateUrl : 'view1-data.html',
        controller : 'View1Data1Controller'

    };
});


app.directive('view2Data', function(){
   return {
       restrict : 'E',
       templateUrl : 'view2-data.html',
       controller : 'View2Data1Controller'
   };
});


app.controller('View1Data1Controller', function($scope){
    $scope.persons = [
        "Peter",
        "John",
        "Rajeev",
        "Kiran"
    ];
});

app.controller('View2Data1Controller', function($scope){
    $scope.cities = [
        "New York",
        "London",
        "Delhi",
        "Bangalore"
    ];
});
