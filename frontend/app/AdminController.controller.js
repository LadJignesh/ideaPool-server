ideaPoolApp.controller('AdminController', ['$scope', '$http', function ($scope, $http) {
    $http.get(apiUrl).then(function (response) {
        $scope.ideas = response.data;
    });

    $scope.deleteIdea = function (id, title) {
        const del = confirm("Are you sure you want to delete " + title);
        if (del) {
            $http.delete(apiUrl + id).
                then(function (response) {
                    // ToDo : Give proper response and redirect
                    alert('Idea has been deleted!');
                    location.reload(true);
                    console.log(response.data);
                }, function (response) {
                    // ToDo : Show proper error message and handle it
                    alert('Some server error while deleting!');
                    console.log(response.data);
                });
        }
    }

    $scope.passID = function (id) {
        $scope.uid = id;
    }
    $scope.approveIdea = function (id, ratings) {

        //console.log($scope.uid + "/" + ratings);
        const newupdatedData = {
            ratings: ratings,
            status: "approved"
        };
        $http.put(apiUrl + $scope.uid, JSON.stringify(newupdatedData)).
            then(function (response) {
                // ToDo : Give proper response and redirect
               $('#adminModal').modal('hide');
               alert('Idea has been approved!');
               location.reload(true);
               console.log(response.data);
            }, function (response) {
                // ToDo : Show proper error message and handle it
                $('#adminModal').modal('hide');
                alert('Server error while deleting!');
                console.log(response.data);
            });
    }
}]);