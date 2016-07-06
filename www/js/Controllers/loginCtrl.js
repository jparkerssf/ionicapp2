
angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', '$state', 'SSFUsersRest','$window', function($scope, $state, SSFUsersRest,$window) {
            $scope.user = {};
            $scope.signinForm = function(form) {
                if (form.$invalid) {
                    return alert("Please complete the form before proceeding.");
                }


                SSFUsersRest.get($scope.user)
                    .then(function(response) {
                        if (response.status == 200) {
                            $scope.user={};
                            $state.go('lobby');
                            $window.localStorage.token=response.data.id;
                            $window.localStorage.userID = response.data.userId;
                        }
                    }, function(error) {
                        if (error.status == 404) {
                            console.log("Page not found!");
                        }
                        else if (error.status == 422) {
                            alert("That email has already been taken!");
                        }
                        else if (error.status == 500) {
                            console.log("The world has ended");
                        }
                    });
           };
            }]);
