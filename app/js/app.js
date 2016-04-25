require('angular/angular');
require('angular-route/angular-route');
require('angular-aria/angular-aria');
require('angular-animate/angular-animate');
require('angular-material/angular-material');

// Create your app
var app = angular.module('moeder_jong', ['ngRoute', 'ngMaterial']);

app.controller('AppController', require('./app.controller.js'));
app.service('GamesService', ['$http', require('./games/games.service.js')]);
app.controller('GamesController', ['LoginService', 'GamesService', require('./games/games.controller.js')]);
app.service('LoginService', ['$http', require('./login/login.service.js')]);
app.controller('LoginController', ['LoginService', require('./login/login.controller.js')]);

app.config(['$routeProvider',
	function($routeProvider, uiGmapGoogleMapApiProvider) {
		$routeProvider.
    	when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController as login'
        }).
        when('/games', {
        	templateUrl: 'templates/games.html',
            controller: 'GamesController as games'
        }).
        when('/games/:gameID', {
        	templateUrl: 'templates/gameInfo.html',
            controller: 'GameInfoController as gameInfo'
        }).
        otherwise({
        	redirectTo: '/login'
        });
	}
]);