angular.module("allControllers", [])

	.controller("mainCtrl", ["$scope", "$state", "$location", function($scope, $state, $location) {
		
		function initial() {
			function getState(addy) {
				//console.log(addy);
				switch(addy) {
					case '':
					case '/':
						return 'home';
					default:
						return addy.slice(1);
				}
			}
			
			// get current path
			$scope.currentState = getState($location.path());
			//console.log($scope.currentState);
		}

		//// scope functions ////
		
		$scope.changeState = function(state) {
			$scope.currentState = state;
			window.scrollTo(0,0);
		}
		$scope.isCurrent = function(state) {
			return $scope.currentState === state;
		}
		
			
		// run on initial app load
		initial();
		
	}]);
	
