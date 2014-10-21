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
				command:	"git diff",
				example:	["git diff"],
				action: 	["compare current status against last commit"]
			},{
				command:	"git add",
				example:	["git add .", "git add <filename>"],
				action: 	["add all files", "add specified file"]
			},{
				command:	"git commit",
				example:	["git commit -m 'initial commit'"],
				action: 	["save a project with message 'initial commit'"]
			},{
				command:	"git push",
				example:	["git push origin master", "git push heroku master", "git push origin gh-pages"],
				action: 	["push commits to github master branch", "deploy project to heroku", "deploy project to gh-pages branch"]
			},{
				command:	"git pull",
				example:	["git pull https://github.com/alphabeta/hello-hello-app"],
				action: 	["pull the repository 'hello-hello-app' from username 'alphabeta'"]
			},{
				command:	"git clone",
				example:	["git clone https://github.com/alphabeta/hello-hello-app"],
				action: 	["create a project by cloning an existing repository 'hello-hello-app' from username 'alphabeta'"]
			}

		];

		return git;
		
	});
