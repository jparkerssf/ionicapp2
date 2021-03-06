// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic.service.core','ionic.service.push','IonicPushModule', 'TKTestQuestions', 'starter.controllers', 'TKTestAnswers', 'chart.js', 'TKResultsButton','RESTServices','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }



  });


})



.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('lobby', {
      url: '/lobby',
      templateUrl: 'Templates/lobby.html',
      controller: 'LobbyCtrl'
    })

  .state('question', {
    url: '/question:questionID',
    templateUrl: 'Templates/question.html',
    controller: 'QuestionsCtrl',
    resolve: {
      testInfo: function($stateParams, TKTestQuestionService) {

        return TKTestQuestionService.getQuestion($stateParams.questionID);
      }
    }
  })
 .state('results', {
    url: '/results',
    templateUrl: 'Templates/results.html',
    controller: 'ResultsCtrl',
    cache: false
  })
  .state('history', {
    url: '/history',
    templateUrl: 'Templates/history.html',
    controller: 'HistoryCtrl',
    resolve: {
      tests: ['TKAnswersService','$window', function(TKAnswersService, $window) {
        
 return TKAnswersService.getTests($window.localStorage.userID, $window.localStorage.token)
        .then(function(res)  {
           console.log(res);
           return res.data; 
       }, function(err){
           alert("There was an error retrieving your information");
           return err;
       });
       
      }]
    }
  })
.state('landing', {
    url: '/',
    templateUrl: 'Templates/landing.html',
    controller:'landingCtrl'
  })
  
  .state('register', {
    url: '/register',
    templateUrl: 'Templates/register.html',
     controller: 'registerCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'Templates/login.html',
    controller:'loginCtrl'
     
  })

});
