angular.module("allDirectives", [])

	.directive("mainMenu", function() {
		
		function link(scope, elem, attr) {

			scope.menu = ["Home", "General", "Terminal"];
			
		}
		
		return {
			link: link,
			restrict: 'E',
			replace: true,
			template: [
				"<aside  class='toc page-list' id='table_of_contents'>",
					"<ul>",
						"<li ng-repeat='item in menu'>",
							"<a ui-sref={{item}} ng-click='changeState(item)' ng-class='{current: isCurrent(item)}'>{{item}}</a>",
						"</li>",
					"</ul>",
				"</aside>"
			].join("")
		}
		
	});
