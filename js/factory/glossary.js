angular.module("factoryGlossary", [])

	.factory("Glossary", function() {
		
		var glossary = [
			
			{
				term: "website",
				def:	"A collection of webpages that is hosted online and available through internet.&nbsp;&nbsp;Every website has a corresponding URL or web address which can be accessed using a web browser to view the contents of the website.",
				tags: ["website", "web site", "site"]
			},{
				term: "web application",
				def:	"Web applications are software programs that run in a web browser.&nbsp;&nbsp;More complex than a website, they may contain a database component which can store information and be accessed by the user.",
				tags: ["application", "web", "app"]
			},{
				term: "mobile application",
				def:	"An application developed specifically to run on a smartphone, tablet, or smartwatch.",
				tags: ["mobile", "application", "app"]
			},{
				term: "text editor",
				def:	"A program to write and edit plain text files.&nbsp;&nbsp;atom.io and sublime are popular text editors used in the tech industry.",
				tags: ["text", "editor"]
			},{
				term: "terminal",
				def:	"A program that interacts with the computer operating system through a single command line.&nbsp;&nbsp;You can create, edit, and delete files and folders, as well as install and open applications too.  &nbsp;&nbsp;Please see the terminal section for a list of commands.",
				tags: ["terminal", "command line", "command prompt", "console"]
			},{
				term: "version control",
				def:	"Version control is a method to manage the changes to a project, document, website... basically anything.&nbsp;&nbsp;Similar to incremental saving but on a larger scale, version control systems are widely used throughout the tech industry.&nbsp;&nbsp;Git, SVN, and CVS are examples of version control systems.",
				tags: ["version control", "revision control", "source control", "git", "cvs", "svn"]
			},{				
				term: "database",
				def:	"An organized collection of data",
				tags: ["db", "database"]
			},{				
				term: "open source",
				def:	"Open source software is available to the public.&nbsp;&nbsp;Anyone is free to modify the code as they see fit.",
				tags: ["open source"]
			},{				
				term: "HTML",
				def:	"Hypertext Markup Language",
				tags: ["html", "html5", "hypertext", "markup", "language"]
			},{				
				term: "CSS",
				def:	"Cascading Style Sheets",
				tags: ["css", "cascading", "style", "sheets"]
			},{
				term: "MVC",
				def:	"<span>M</span>odel-<span>V</span>iew-<span>C</span>ontroller",
				tags: ["model", "view", "controller", "framework"]
			},{				
				term: "Ruby",
				def:	"A programming language.",
				tags: ["ruby"]
			},{
				term: "Ruby on Rails",
				def:	"A MVC framework built on the Ruby programming language",
				tags: ["ruby", "ror", "rails", "mvc"]
			},{
				term: "JavaScript",
				def:	"Considered the 'programming language of the web', JavaScript is the most popular client-side scripting language.&nbsp&nbsp;",
				tags: ["javascript","js"]
			},{				
				term: "XML",
				def:	"e<span>X</span>tensible <span>M</span>arkup <span>L</span>anguage",
				tags: ["xml", "extensible", "markup", "language"]
			},{				
				term: "JSON",
				def:	"JavaScript Object Notation",
				tags: ["json", "javascript"]
			},{
				term: "AJAX",
				def:	"<span>A</span>synchronous <span>J</span>avaScript <span>A</span>nd <span>X</span>ML is a popular web development technique used on the client-side.&nbsp;&nbsp;This technique allows data transfer between client and server to happen asynchronously (behind the scenes) without page refreshing/reloading.&nbsp;&nbsp;Many web applications that feature dynamic content use AJAX.&nbsp;&nbsp;Although XML represents the 'X', many developers choose to use JSON as the data format instead.",
				tags: ["ajax", "ajaj", "asynchronous", "javascript", "xml"]
			},{				
				term: "API",
				def:	"Application Programming Interface",
				tags: ["api", "application", "programming", "interface"]
			}
			
		];
			
		return glossary;
		
	});
