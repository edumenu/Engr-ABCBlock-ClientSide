
var app = angular.module("myApp", []);
app.controller('myCtrl', ['$scope', '$http', function($scope, $http,$window) {
    $scope.myFunc = function(){
        var auth = window.btoa($scope.firstName + ':' + $scope.lastName), headers = {"Authorization": "Basic " + auth};
        $http.get("http://34.200.170.137/abcblock/login", {headers: headers}).then(function (response) {
            $scope.ctObject = response.data;
            //$scope.message = $scope.ctObject.id;
            var myUrl = window.location = "profilePage.html";
            //$scope.variable = $scope.ctObject.id + ' ' + $scope.ctObject.last_name;
            $window.open(myUrl);
        }, function (response)
        {
            $scope.variable = "Invalid input!";
        });
    }
}])



app.controller('myCtrl1', ['$scope', '$http', function($scope, $http) {
    $scope.myFunc1 = function(){
        var ctObject = ({
            first_name: $scope.firstName,
            last_name: $scope.lastName,
            username: $scope.userName,
            password: $scope.passWord
        });
        $http.post('http://34.200.170.137/abcblock/cts', ctObject)
            .then(function sucessCallback (ctObject) {
                    ctObject.id = data.insertId;
                    $scope.ctObject = ctObject;
                }
                , function errorCallback(error, status) {
                    $scope.my_variable1 = "Invalid Input!";
                });
    };
}]);

