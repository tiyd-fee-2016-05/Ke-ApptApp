
  var myApp = angular.module( "myApp", [ "ngRoute" ] );

  myApp.config( function( $routeProvider ) {
    $routeProvider
      .when( "/home", {
        templateUrl: "list-of-appts.html",
        controller: "NewApptController"
      }) // end home when
      .when( "/NewAppt", {
        templateUrl: "new-appt.html",
        controller: "NewApptController"
      }) // end new-appt when
      // .when({
      //
      // })
      .otherwise( {
      redirectTo: "list-of-appts.html"
    });
  }); // end myApp.config

  myApp.controller( "NewApptController", function( $scope, $http ) {
    $
  }) // end controller
