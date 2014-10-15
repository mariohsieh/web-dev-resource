angular.module("webDevResourceApp", [
	"ngSanitize",
	"ngAnimate",
	"allControllers",
	"allDirectives",	
	"factoryGlossary",
	"factoryFaq",
	"ui.router"
	])

	// configure routes
	.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('glossary', {
				url: '/glossary',
				controller: function($scope, Glossary) {
					$scope.glossary = Glossary;
				},
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
			})
			.state('faq', {
				url: '/faq',
				controller: function($scope, FAQ) {
						$scope.faq = FAQ;
						//console.log($scope.faq[0]);
						
						$scope.showAnswer = function(id) {
							if ($scope.currentQ == id)
								$scope.currentQ = null;
							else 
								$scope.currentQ = id;
						}
				},
				templateUrl: 'views/faq.html'
			});						
	}]);
