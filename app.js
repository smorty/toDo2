'use strict';

var myApp = angular.module('toDo2', []);

// angular.module('toDo2', ['ui-router'])
// 	.config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise("/");

//   $stateProvider
//     .state('main', {
//       url: "/",
//       templateUrl: "main.html",
//       controller: 'MainCtrl'
//   //     resolve: {
//   // 	  	teams: function(Turtle) {
//   //     		return Turtle.getTeams();
//   // 			}
// 		// }
//     })
//   //   .state('team', {
//   //     url: '/team/:teamId',
//   //     templateUrl: 'views/team.html',
//   //     controller: 'TeamCtrl',
//   //     resolve:  {
//   // 		team: function($stateParams, Turtle) {
//   //   		return Turtle.getTeam($stateParams.teamId);
//   // 			}
// 		// }
//   //   })
//   });