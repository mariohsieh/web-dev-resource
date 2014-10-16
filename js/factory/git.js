angular.module("factoryGit", [])

	.factory("Git", function() {
		
		var git = [

			{
				command:	"git init",
				example:	["git init"],
				action: 	["create a git project in current directory"]
			},{
				command:	"git status",
				example:	["git status"],
				action: 	["check status of current git project"]
			},{
				command:	"git add",
				example:	["git add .", "git add index.html"],
				action: 	["add all files", "add specified file"]
			}
			
		];
			
		return git;
		
	});
