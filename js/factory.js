angular.module("allFactories", [])

	.factory("Glossary", function() {
		
		var glossary = [
			
			{
				term: "website",
				def:	"A collection of webpages that is hosted online and available through internet.&nbsp;&nbsp;Every website has a corresponding URL or web address which can be accessed using a web browser to view the contents of the website.",
				tags: ["web site", "site"]
			},{
				term: "web application",
				def:	"Web applications are software programs that run in a web browser.&nbsp;&nbsp;More complex than a website, they may contain a database component which can store information and be accessed by the user.",
				tags: ["web app", "app"]
			},{
				term: "mobile application",
				def:	"An application developed specifically to run on a smartphone, tablet, or smartwatch.",
				tags: ["mobile app", "app"]
			},{
				term: "text editor",
				def:	"A program to write and edit plain text files.&nbsp;&nbsp;atom.io and sublime are popular text editors used in the tech industry."
			},{
				term: "terminal",
				def:	"A program that interacts with the computer operating system through a single command line.&nbsp;&nbsp;You can create, edit, and delete files and folders, as well as install and open applications too.  &nbsp;&nbsp;Please see the terminal section for a list of commands.",
				tags: ["command line", "command prompt", "console"]
			},{
				term: "version control",
				def:	"Version control is a method to manage the changes to a project, document, website... basically anything.&nbsp;&nbsp;Similar to incremental saving but on a larger scale, version control systems are widely used throughout the tech industry.&nbsp;&nbsp;Git, SVN, and CVS are examples of version control systems.",
				tags: ["revision control", "source control"]
			},{				
				term: "database",
				def:	"An organized collection of data",
				tags: ["db"]
			},{				
				term: "open source",
				def:	"Open source software is available to the public.&nbsp;&nbsp;Anyone is free to modify the code as they see fit.",
				tags: [""]
			},{				
				term: "HTML",
				def:	"Hypertext Markup Language",
				tags: [""]
			},{				
				term: "CSS",
				def:	"Cascading Style Sheets",
				tags: [""]
			},{
				term: "MVC",
				def:	"<span>M</span>odel-<span>V</span>iew-<span>C</span>ontroller",
				tags: ["model-view-controller"]
			},{				
				term: "Ruby",
				def:	"A programming language.",
				tags: [""]
			},{
				term: "Ruby on Rails",
				def:	"A MVC framework built on the Ruby programming language",
				tags: ["RoR", "Rails"]
			},{
				term: "JavaScript",
				def:	"Considered the 'programming language of the web', JavaScript is the most popular client-side scripting language.&nbsp&nbsp;",
				tags: ["js"]
			},{				
				term: "XML",
				def:	"e<span>X</span>tensible <span>M</span>arkup <span>L</span>anguage",
				tags: [""]
			},{				
				term: "JSON",
				def:	"JavaScript Object Notation",
				tags: [""]
			},{
				term: "AJAX",
				def:	"<span>A</span>synchronous <span>J</span>avaScript <span>A</span>nd <span>X</span>ML is a popular web development technique used on the client-side.&nbsp;&nbsp;This technique allows data transfer between client and server to happen asynchronously (behind the scenes) without page refreshing/reloading.&nbsp;&nbsp;Many web applications that feature dynamic content use AJAX.&nbsp;&nbsp;Although XML represents the 'X', many developers choose to use JSON as the data format instead.",
				tags: ["AJAJ"]
			},{				
				term: "API",
				def:	"Application Programming Interface",
				tags: [""]
			}
			
		];
			
		return glossary;
		
	});
