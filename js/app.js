angular.module("webDevResourceApp", [
	"ngSanitize",
	"ngAnimate",
	"allControllers",
	"allDirectives",	
	"factoryGlossary",
	"factoryFaq",
	"factoryTerminal",
	"factoryGit",
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
				controller: function($scope, Terminal) {
					$scope.data = Terminal;
				},
				templateUrl: 'views/commands.html'
			})
			.state('git', {
				url: '/git',
				controller: function($scope, Git) {
					$scope.data = Git;
				},
				templateUrl: 'views/commands.html'
			})
			.state('programming', {
				url: '/programming',
				templateUrl: 'views/programming.html'
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
