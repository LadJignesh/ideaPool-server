var ideaPoolApp = angular.module('ideaPoolApp', ['ngRoute']);
//const apiUrl = 'http://localhost:3000/v1/ideaApp/';
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
        .when('/error', {
            templateUrl: 'views/error.html'
        })
        .otherwise({
            redirectTo: '/error'
        })
}]);

ideaPoolApp.directive('ideaForm', [function () {

    return {
        restrict: 'E',
        $scope: {
            title: '='
        },
        templateUrl: 'views/newIdeaForm.html',
        transclude: true,
        replace: true,
        controller: function ($scope) {
            //controller code here
            $scope.existing = ["yes", "no", "NA"];
            $scope.areas = ["Business Value", "JDE", "Clouds", "NA"];
        }
    };

}]);

ideaPoolApp.directive('ideaDisplay', [function () {

    return {
        restrict: 'E',
        templateUrl: 'views/ideasDisplay.html',
        transclude: true,
        replace: true,
        controller: function ($scope) {
            //controller code here
        }
    };

}]);

ideaPoolApp.controller('AdminController', ['$scope', '$http', function ($scope, $http) {
    $http.get(apiUrl).then(function (response) {
        $scope.ideas = response.data;
    });

    $scope.deleteIdea = function (id, title) {
        const del = confirm("Are you sure you want to delete " + title);
        if (del) {
            $http.delete(apiUrl + id).
                then(function (response) {
                    $scope.response = response.data;
                }, function (response) {
                    $scope.response = response.data || 'Request failed';
                });
        }
    }

    $scope.passID = function (id) {
        $scope.uid = id;
    }
    $scope.approveIdea = function (id, ratings) {

        console.log($scope.uid + "/" + ratings);
        const newupdatedData = {
            ratings: ratings,
            status: "approved"
        };
        $http.put(apiUrl + $scope.uid, JSON.stringify(newupdatedData)).
            then(function (response) {
                console.log(response);
                $scope.response = response.data;
            }, function (response) {
                $scope.response = response.data || 'Request failed';
            });
    }
}]);

ideaPoolApp.controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    $http.get(apiUrl).then(function (response) {
        $scope.ideas = response.data;
    });
}]);

ideaPoolApp.controller('submitIdea', ['$scope', '$http', function ($scope, $http) {
    $scope.addIdea = function () {
        newIdea = {
            title: $scope.newidea.title,
            existing: $scope.newidea.existing,
            area: $scope.newidea.area,
            category: $scope.newidea.category,
            ipType: $scope.newidea.ipType,
            ipStatus: $scope.newidea.ipStatus,
            keyValueAttribute: $scope.newidea.keyValueAttribute,
            description: $scope.newidea.description,
            createdBy: $scope.newidea.createdBy,
            itemType: $scope.newidea.itemType,
            path: $scope.newidea.path
        };

        $http.post(apiUrl, JSON.stringify(newIdea)).
            then(function (response) {
                $scope.response = response.data;
            }, function (response) {
                alert("Request failed");
                $scope.response = response.data || 'Request failed';
            });

    };
}]);

