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
				templateUrl: 'views/glossary.html'
			})			
			.state('terminal', {
				url: '/terminal',
				templateUrl: 'views/terminal.html'
			})
			.state('git', {
				url: '/git',
				templateUrl: 'views/git.html'
			})
			.state('ruby', {
				url: '/ruby',
				templateUrl: 'views/ruby.html'
			})
			.state('javascript', {
				url: '/javascript',
				templateUrl: 'views/javascript.html'
			});						
	});
