var ideaPoolApp = angular.module(
    'ideaPoolApp',
    ['ngRoute','ui.bootstrap'])
    .filter('startFrom',function(){
        return function(data, start){
            return data.slice(start);
        }
    });
//const apiUrl = 'http://localhost:3000/v1/ideaApp/'; -> for dev
const apiUrl = 'https://sampledev121.herokuapp.com/v1/ideaApp/';

ideaPoolApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/admin', {
            templateUrl: '/views/admin.html',
            controller: 'AdminController'
        })
        .when('/work/:ideaId',{
            templateUrl: '/views/ideaPage.html',
            controller: 'IdeaPageController'
        })
        .when('/error', {
            templateUrl: 'views/error.html'
        })
        .otherwise({
            redirectTo: '/error'
        })
}]);
