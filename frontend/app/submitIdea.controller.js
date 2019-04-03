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
                // ToDo : Give proper response and redirect
                $('#myModal').modal('hide');
                alert('Idea successfully sent for approval');
                location.reload(true);
                console.log(response.data);
            }, function (response) {
                alert("Request failed");
                // ToDo : Show proper error message and handle it
                $('#myModal').modal('hide');
                alert('Error while sending data please try again later!!');
                console.log(response.data);
            });

    };
}]);