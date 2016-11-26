(function () {

    var app = angular.module("navigationApp", []);

    app.controller("navigationAppCtrl", function ($scope, $http) {
        $http.get('Woodbury.json')
            .success(function (data) {
                $scope.stores = data;
            })
            .error(function () {
                console.log("Error")
            });
    })
})();