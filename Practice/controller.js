
angular.module('myApp', [])
    .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.myFunc = function(){
            var auth = window.btoa($scope.userName + ':' + $scope.lastName), headers = {"Authorization": "Basic " + auth};
            $http.get("http://34.200.170.137/abcblock/login", {headers: headers}).then(function (response) {
                $scope.ctObject = response.data;

                $scope.my_variable = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
            }, function (response)
            {
                $scope.my_variable = "YOU FREAKING SUCK BRO";
            });
        }
    }]);
