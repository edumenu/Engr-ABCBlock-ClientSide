var app = angular.module('myApp2', []);
app.controller('myCtrl2', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/cts/1", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        //$scope.message = "Success!!";
        $scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input!";
    });
}]);

app.controller('myCtrl3', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/cts/1/patients", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.records = $scope.ctObject;
        //$scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.records = "Invalid input!";
    });

}]);

app.controller('myCtrl4', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/sessions/1/media?left", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.records1 = $scope.ctObject;
        console.log($scope.records1);
        //$scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.records1 = "Invalid input!";
    });
}]);

app.controller('myCtrl5', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/sessions/1/session_data?left", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject2 = response.data;
        $scope.records = $scope.ctObject2;
        //console.log($scope.records2);
        //$scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.records2 = "Invalid input!";
    });

}]);

app.controller('myCtrl6', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/sessions/1/media?right", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.records1 = $scope.ctObject;
        console.log($scope.records1);
        //$scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.records1 = "Invalid input!";
    });
}]);

app.controller('myCtrl7', ['$scope', '$http', function($scope, $http) {
    $http.get("http://34.200.170.137/abcblock/sessions/1/session_data?right", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject2 = response.data;
        $scope.records = $scope.ctObject2;
        //console.log($scope.records2);
        //$scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.records2 = "Invalid input!";
    });

}]);


