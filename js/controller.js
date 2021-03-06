angular.module("allControllers", [])

	.controller("mainCtrl", function($scope, $state, $location) {
		
		function initial() {
			function getState(addy) {
				//console.log(addy);
				switch(addy) {
					case '':
					case '/':
						return 'Home';
					case '/general':
						return 'General';
					case '/terminal':
						return 'Terminal';
					default:
						return addy;
				}
			}
			
			$scope.currentState = getState($location.path());
			console.log($scope.currentState);
		}

		$scope.changeState = function(state) {
			$scope.currentState = state;
			window.scrollTo(0,0);
		}
			
		$scope.isCurrent = function(state) {
			return $scope.currentState === state;
		}
				
		initial();
		
	});
	
