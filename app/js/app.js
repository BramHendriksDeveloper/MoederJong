require('angular/angular');
require('angular-ui-router');
require('angular-aria/angular-aria');
require('angular-animate/angular-animate');
require('angular-material/angular-material');

// Create your app
var app = angular.module('moeder_jong', ['ui.router', 'ngMaterial']);

app.service('LoginService', ['$http', require('./login/login.service.js')]);
app.service('PopupService', ['$http', '$mdDialog', require('./popup.service.js')]);
app.service('GamesService', ['$http', require('./games/games.service.js')]);
app.service('GameService', ['$http', require('./games/game.service.js')]);

app.controller('AppController', require('./app.controller.js'));
app.controller('LoginController', ['LoginService', 'PopupService', require('./login/login.controller.js')]);
app.controller('GamesController', ['LoginService', 'GamesService', require('./games/games.controller.js')]);
app.controller('GameController', ['LoginService', 'GameService', require('./games/game.controller.js')]);

app.config(
    function($stateProvider, $urlRouterProvider) {
		$stateProvider.
    	state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController as login'
        }).
        state('games', {
            url: '/games',
            templateUrl: 'templates/games.html',
            controller: 'GamesController as games'
        }).
        state('games.id', {
            url: '/games/:gameID',
            templateUrl: 'templates/game.html',
            controller: 'GameController as game'
        });
        $urlRouterProvider.otherwise('/login');
	}
);