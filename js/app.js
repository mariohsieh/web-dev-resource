angular.module("webDevTermsApp", [
	"ui.router",
	"allControllers",
	"allDirectives"
	])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('Home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('General', {
				url: '/general',
				template: 'this is the general page'
				//templateUrl: 'views/home.html'
			})			
			.state('Terminal', {
				url: '/terminal',
				template: 'terminal page'
				//templateUrl: 'views/home.html'
			});
			
			
	});
