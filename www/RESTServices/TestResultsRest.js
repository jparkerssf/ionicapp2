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

    TestResultsRest.get = function(){
        return $http({
          url:' https://ionicapp2-jadtheparker.c9users.io/api/TestResults',
          method:'GET',
        })
    };

    
}]);

   