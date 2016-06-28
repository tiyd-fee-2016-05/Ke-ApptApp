
  var myApp = angular.module( "myApp", [ "ngRoute" ] );

  myApp.config( function( $routeProvider ) {
    $routeProvider
      .when( "/home", {
        templateUrl: "list-of-appts.html",
      }) // end home when
      .when( "/NewAppt", {
        templateUrl: "new-appt.html",
      }) // end new-appt when
      .when( "/ApptDetail", {
        templateUrl: "weather-map.html",
      }) // end new-appt when
      .when( "/EditApp", {
        templateUrl: "appt.html",
      }) // end new-appt when
      .otherwise( {
      redirectTo: "list-of-appts.html"
    });
  }); // end myApp.config

  myApp.controller( "NewApptController", function( $scope, $http ) {
    $
  }) // end controller
