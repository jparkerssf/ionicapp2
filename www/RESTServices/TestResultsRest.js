angular.module('RESTServices')
.service('TestResultsRest', ['$http', function($http){
    var TestResultsRest = this;
    
    TestResultsRest.save = function(test){
        return $http({
          url:' https://ionicapp2-jadtheparker.c9users.io/api/TestResults',
          method:'POST',
          data:  test
        })
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

   