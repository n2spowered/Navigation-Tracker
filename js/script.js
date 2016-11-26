(function () {

    var app = angular.module("navigationApp", []);
    $('#myModal').modal({backdrop: 'static', keyboard: false})

    app.controller("navigationAppCtrl", function ($scope, $http) {
        $http.get('Woodbury.json')
            .success(function (data) {
                $scope.stores = data;
                console.log("Data=", data);
            })
            .error(function () {
                console.log("Error")
            });
    })
})();