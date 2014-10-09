angular.module("allDirectives", [])

	.directive("mainMenu", function() {
		
		function link(scope, elem, attr) {

			scope.menu = [
				{ title: "Home",
					state: "home"
				}, {
					title: "Glossary",
					state: "glossary"
				},{
					title: "Terminal Commands",
					state: "terminal"
				},{
					title: "Git Commands",
					state: "git",
				},{
					title: "Ruby",
					state: "ruby"
				},{
					title: "JavaScript",
					state: "javaScript"
				},{
					title: "Links",
					state: "links"
				}
			];
			
		}
		
		return {
			link: link,
			restrict: 'E',
			replace: true,
			template: [
				"<aside  class='toc page-list' id='table_of_contents'>",
					"<ul>",
						"<li ng-repeat='item in menu'>",
							"<a ui-sref={{item.state}} ng-click='changeState(item.state)' ng-class='{current: isCurrent(item.state)}'>{{item.title}}</a>",
						"</li>",
					"</ul>",
				"</aside>"
			].join("")
		}
		
	});
