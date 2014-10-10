angular.module("allFactories", [])

	.factory("Glossary", function() {
		
		var glossary = [
			
			{
				term: "website",
				def:	"A collection of webpages that is hosted online and available through internet.&nbsp;&nbsp;Every website has a corresponding URL or web address which can be accessed using a web browser to view the contents of the website.",
				alias: ["web site", "site"]
			},{
				term: "web application",
				def:	"Web applications are software programs that run in a web browser.&nbsp;&nbsp;More complex than a website, they may contain a database component which can store information and be accessed by the user.",
				alias: ["web app", "app"]
			},{
				term: "mobile application",
				def:	"An application developed specifically to run on a smartphone, tablet, or smartwatch.",
				alias: ["mobile app", "app"]
			},{
				term: "text editor",
				def:	"A program to write and edit plain text files.&nbsp;&nbsp;atom.io and sublime are popular text editors used in the tech industry."
			},{
				term: "terminal",
				def:	"A program that interacts with the computer operating system through a single command line.&nbsp;&nbsp;You can create, edit, and delete files and folders, as well as install and open applications too.  &nbsp;&nbsp;Please see the terminal section for a list of commands.",
				alias: ["command line", "command prompt", "console"]
			},{
				term: "version control",
				def:	"Version control is a method to manage the changes to a project, document, website... basically anything.&nbsp;&nbsp;Similar to incremental saving but on a larger scale, version control systems are widely used throughout the tech industry.&nbsp;&nbsp;Git, SVN, and CVS are examples of version control systems.",
				alias: ["revision control", "source control"]
			}
			
		];
			
		return glossary;
		
	});
