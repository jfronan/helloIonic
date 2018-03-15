// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic', 'ui-router'])

var app = angular.module('starter', ['ionic','ngAnimate','ngResource']);


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
   .state('homeTab',{
     views: {
       'home-tab' :{
       templateUrl: 'views/homeTab.html',
       controller: 'myCtrl'
     }
    }
   })
   .state('youtubePlayer',{
     views: {
       'youtube-player' :{
       templateUrl: 'views/youtubePlayer.html',
       controller: 'myCtrl'    
     }
    }
   });
   $urlRouterProvider.otherwise('homeTab');
});

app.controller('myCtrl', function($scope, $http, $compile, $state){
  $scope.value42 = false;
  $scope.value10 = "item-stable";
  $scope.platform = ionic.Platform;
  
  $scope.tabState = function(transTab){
    $state.go(transTab);
  }


});

