 angular.module("RESTServices", []) 
  .service('SSFUsersRest', ['$http', function($http){ 
  
var  SSFUsersRest = this;
SSFUsersRest.post = function(newUserData) {
 return $http({
            url: "https://ionicapp2-jadtheparker.c9users.io/api/SSFUsers",
            method:'POST',
            data: newUserData
          });
        };
        
      SSFUsersRest.get = function() {
 return $http({
            url: "https://ionicapp2-jadtheparker.c9users.io/api/SSFUsers",
            method:'GET'
          });
        };
        
   }]);
   
   
