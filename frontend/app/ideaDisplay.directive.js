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