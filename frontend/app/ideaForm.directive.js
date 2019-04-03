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