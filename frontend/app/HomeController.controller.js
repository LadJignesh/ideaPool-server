ideaPoolApp.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.pageSize=4;
    $scope.currentPage=2;
    $http.get(apiUrl).then(function (response) {
        $scope.ideas = response.data;
        $scope.totalItems = parseInt(response.data.length);
        console.log($scope.totalItems);
    });
  

}]);