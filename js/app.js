angular.module("webDevResourceApp", [
	"ui.router",
	"ngAnimate",
	"allControllers",
	"allDirectives"
	])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('glossary', {
				url: '/glossary',
				template: 'Glossary page'
				//templateUrl: 'views/glossary.html'
			})			
			.state('terminal', {
				url: '/terminal',
				template: 'terminal page'
				//templateUrl: 'views/terminal.html'
			});
			
			
	});
