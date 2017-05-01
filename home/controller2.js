//Author: Edem Dumenu
//Creation: 03-02-2017
//Development Team: Edem Dumenu, Luke Clark, Sam Justice
//Description: This activity facilitates the CT's profile page, the patient list page and the patient statistics page
//It receives the User's credentials and passes that information to the server for authentication

//Name: New  module
//Author: Edem Dumenu
//Date: 03-05-2017
//Purpose: This is creating a new module called app
//Arguments: "myApp" which is the name of the app
//Errors/Exceptions: None
//Modification history: This is the original version
var app = angular.module('myApp2', []);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-07-2017
//Purpose: This is creating a new controller to retrieve the name of the CT who's signed in
//Arguments: "myCtrl2" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('myCtrl2', ['$scope', '$http', function($scope, $http) {
    var accessData = window.localStorage['ctID'];
    $http.get("http://34.200.170.137/abcblock/cts/" + accessData,
        {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} })
        .then(function (response) {
        $scope.ctObject = response.data;
        $scope.message = $scope.ctObject.first_name + ' ' + $scope.ctObject.last_name;
    }, function (response)
    {
        $scope.message = "Invalid input!";
    });
}]);//end of myCtrl2

//Name: New  module
//Author: Edem Dumenu
//Date: 03-07-2017
//Purpose: This is creating a new controller to retrieve the patient list associated with the CT
//Arguments: "patientList" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server. $sce which provides strict contextual escaping services to angularjs
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('patientList', ['$scope', '$http','$sce', function($scope, $http, $sce) {
    var accessData = window.localStorage['ctID'];
    $http.get("http://34.200.170.137/abcblock/cts/" + accessData + "/patients",
        {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} })
        .then(function (response) {
        $scope.items = response.data;
        $scope.message = "Success!!";
    }, function (response)
    {
        $scope.message = "Invalid input!";
    });

    //Name: New  module
//Author: Edem Dumenu
//Date: 03-07-2017
//Purpose: This function is retrieving a patient's ID number when you select a patient. Then it stores the patient's ID number in
// a local storage called "patientNum". It then opens the "profilePage.html" in the iframe.
//Arguments: "patientID" which is the patient's ID.
//Errors/Exceptions: None
//Modification history: This is the original version
    $scope.removeID = function(patientID){
        window.localStorage['patientNum'] = angular.toJson(patientID);
        $scope.detailFrame = $sce.trustAsResourceUrl("profilePage.html");
    }

}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-09-2017
//Purpose: This is creating a new controller to retrieve the types of media displayed on the left tablet
//Arguments: "leftMedia" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('leftMedia', ['$scope', '$http', function($scope, $http) {
    var accessData = window.localStorage['leftClick'];
    $http.get("http://34.200.170.137/abcblock/sessions/"+ accessData +"/media?left",
        {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} })
        .then(function (response) {
        $scope.ctObject = response.data;
        $scope.records = $scope.ctObject;
    }, function (response)
    {
        $scope.records = "Invalid input!";
    });
}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-09-2017
//Purpose: This is creating a new controller to retrieve the left clicks the patient made during a session.
//Arguments: "leftClicks" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('leftClicks', ['$scope', '$http', function($scope, $http) {
    var accessData = window.localStorage['patientNum'];
    $http.get("http://34.200.170.137/abcblock/sessions/" + accessData + "/session_data?left", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.pObject2 = response.data;
        $scope.left = $scope.pObject2;
        window.localStorage['leftClick'] = angular.toJson($scope.pObject2.id);
    }, function (response)
    {
        $scope.left = "Invalid input!";
    });

}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-09-2017
//Purpose: This is creating a new controller to retrieve the right clicks the patient made during a session.
//Arguments: "rightClicks" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('rightClicks', ['$scope', '$http', function($scope, $http) {
    var accessData = window.localStorage['patientNum'];
    $http.get("http://34.200.170.137/abcblock/sessions/"+ accessData +"/session_data?right", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.pObject = response.data;
        $scope.right = $scope.pObject;
        window.localStorage['rightClick'] = angular.toJson($scope.pObject.id);
    }, function (response)
    {
        $scope.right = "Invalid input!";
    });
}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-11-2017
//Purpose: This is creating a new controller to retrieve the types of media displayed on the right tablet
//Arguments: "rightMedia" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('rightMedia', ['$scope', '$http', function($scope, $http) {
    var accessData = window.localStorage['rightClick'];
    $http.get("http://34.200.170.137/abcblock/sessions/"+ accessData +"/media?right", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.records = $scope.ctObject;
    }, function (response)
    {
        $scope.records = "Invalid input!";
    });
}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-11-2017
//Purpose: This is creating a new controller to retrieve the patient's name after selecting a patient
//Arguments: "patientName" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('patientName', ['$scope', '$http', function($scope, $http) {
   var patientID = window.localStorage['patientNum'];
    $http.get("http://34.200.170.137/abcblock/patients/"+ patientID, {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.pObject = response.data;
        $scope.patient = $scope.pObject.first_name + '  ' + $scope.pObject.last_name;
    }, function (response)
    {
        $scope.patient = "Invalid input!";
    });
}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-11-2017
//Purpose: This is creating a new controller to retrieve the list of sessions a patient has taken part of.
//Arguments: "sessionList" which is the name of the controller. $scope which is the scope object. $http which is an angularjs service
//for reading data from server.
//Errors/Exceptions: None
//Modification history: This is the original version
app.controller('sessionList', ['$scope', '$http', '$sce', function($scope, $http) {
    var patientID = window.localStorage['patientNum'];
    $http.get("http://34.200.170.137/abcblock/sessions/patient/"+ patientID + "?row_start=0&num_rows=5", {headers : {"Authorization": "Basic ZWR1bWVudTplZHVtZW51"} }).then(function (response) {
        $scope.ctObject = response.data;
        $scope.patientLists = $scope.ctObject;
    }, function (response)
    {
        $scope.patientList = "Invalid input!";
    });

}]);

//Name: New  module
//Author: Edem Dumenu
//Date: 03-12-2017
//Purpose: This is creating a new function to set the location of a link
//Arguments: "href" which is the name of the function.
//Errors/Exceptions: None
//Modification history: This is the original version
app.directive('href', function() {
    return {
        compile: function(element) {
            element.attr('target', '_self');
        }
    };
});


