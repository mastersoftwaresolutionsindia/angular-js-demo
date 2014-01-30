 // created module for application.
angular.module('form', []).
    //  config block
  config(function($routeProvider)
    {
        $routeProvider.
          when('/', { templateUrl: 'templates/login.html', controller: 'AttendenceController'}).
          when('/user', { templateUrl: 'templates/user.html', controller: 'newCtrl'})
    })
  // Main controller (ng-controller)
 function AttendenceController ($scope, $http, $location) {

        $scope.saveAttendence = function() {
            if ($scope.username && $scope.password) {
                var user = $scope.username;
                var pass = $scope.password;
                console.log("welcome " + user);
                var data = {
                    name: user,
                    pass: pass
                }
                $http.post("server/insert.php", data).success(function(data, status){
    //                $scope.success = "Login Successfully.";
                  if(data == "error"){
                      $scope.error = "Invalid login credentials";
                  }else {
                    $location.path("/user");
                  }
                });
            } else {
                $scope.error = "Invalid login credentials";
            }
            $scope.username = '';
            $scope.password = '';
        }
    }
// After login this controller used to pass data through model.
function newCtrl ($scope, $http){
    $scope.dine = "Welcome to HRM";
    $scope.dt = new Date();
    $scope.in= "in";
    // When click on punch in button.
    $scope.loginTimeIn = function (){
        $scope.in= "out";
        var now = new Date();
        var time = {
            inTime: now
        }
        $http.post("server/attendence.php", time).success(function(data, status){
            $scope.attendence = "";
            $scope.arr = "";
        });
    }
    // When click on punch out button.
    $scope.loginTimeOut = function () {
        $scope.in= "in";
        $http.get("server/attendence.php").success(function(data, status){
            $scope.arr = "You have logged in "+data+" hours:minutes:seconds.";
        });

    }
}