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
				example:	["cd railsbridge", "cd ~", "cd docs/project/css", "cd /"],
				action: 	["change to the specified directory", "change to home directory", "changs to specified path", "change to root directory"]
			},{
				command:	"touch <file>",
				example:	["touch index.html", "touch project/public/index.html"],
				action: 	["create a new file", "create a new file in specified path"]
			},{
				command:	"mkdir <directory>",
				example:	["mkdir project"],
				action: 	["creates a new directory"]
			}
			
		];
			
		return terminal;
		
	});
