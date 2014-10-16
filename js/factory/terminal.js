angular.module("factoryTerminal", [])

	.factory("Terminal", function() {
		
		var terminal = [

			{
				command:	"pwd",
				example:	["pwd"],
				action: 	["display the preset working directory"]
			},{
				command:	"clear",
				example:	["clear"],
				action: 	["clear the terminal screen"]
			},{
				command:	"exit",
				example:	["exit"],
				action: 	["close the terminal"]
			},{
				command:	"ls",
				example:	["ls", "ls projects/views"],
				action: 	["list files of current directory", "list files of specified directory"]
			},{
				command:	"cd <directory>",
				example:	["cd railsbridge", "cd ..", "cd ~", "cd docs/project/css", "cd /"],
				action: 	["change to the specified directory", "go back one directory", "change to home directory", "go to specified path", "change to root directory"]
			},{
				command:	"mkdir <directory>",
				example:	["mkdir blog-project"],
				action: 	["create a new directory"]
			},{
				command:	"touch <file>",
				example:	["touch index.html", "touch project/public/index.html"],
				action: 	["create a new file", "create a new file in specified path"]
			},{
				command:	"mv <file>",
				example:	["mv info.txt docs", "mv info.txt details.txt", "mv info.txt docs/details.txt"],
				action: 	["move file to specified directory", "rename file in same directory", "move and rename file to specified directory"]
			},{
				command:	"rm <file>",
				example:	["rm index.html", "rm css/style.css"],
				action: 	["delete specified file", "delete file in specified path"]
			},{
				command:	"hold 'ctrl' + press 'c'",
				example:	["^C"],
				action: 	["abort the program running in terminal"]
			}
			
		];
			
		return terminal;
		
	});
