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
        
  SSFUsersRest.get = function(user) {
 return $http({
            url: "https://ionicapp2-jadtheparker.c9users.io/api/SSFUsers/login",
            method:'POST',
             data: user
          });
        };
           

   }]);
   
   
