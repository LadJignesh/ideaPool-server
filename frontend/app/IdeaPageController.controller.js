ideaPoolApp.controller('IdeaPageController', ['$scope', '$http', '$routeParams', function ($scope, $http,$routeParams) {
    console.log($routeParams.ideaId);
    $http.get(apiUrl+$routeParams.ideaId).then(function (response) {
        console.log('getting the data');
        $scope.idea = response.data;
        console.log($scope.idea);
        console.log('got the data');
    });
}]);