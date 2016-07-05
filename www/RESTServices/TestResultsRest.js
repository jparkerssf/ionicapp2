angular.module('RESTServices')
.service('TestResultsRest', ['$http','$window', function($http,$window){
    var TestResultsRest = this;
    
    TestResultsRest.save = function(test){
        return $http({
          url:' https://ionicapp2-jadtheparker.c9users.io/api/TestResults',
          method:'POST',
          data:  test,
          headers: {
                'Authorization': $window.localStorage.token
          }
        });
    };
    var apiUrl = 
    TestResultsRest.get = function(userID,token){
        return $http({
          url:' https://ionicapp2-jadtheparker.c9users.io/api/TestResults?filter[where][userID]='+userID,
          method:'GET',
         
              headers: {
                  'Authorization': token
              }
          });
      };
   
}]);

   