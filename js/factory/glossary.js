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
				def:	"A software program developed specifically to run on a smartphone, tablet, or smartwatch.",
				tags: ["mobile", "application", "app"]
			},{
				term: "text editor",
				def:	"A program to write and edit plain text files.&nbsp;&nbsp;<a target='_blank' href='https://atom.io/'>atom.io</a> and <a target='_blank' href='http://www.sublimetext.com/'>sublime</a> are popular text editors used in the tech industry.",
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
				def:	"An organized collection of data, databases are used by many web applications to store information online.",
				tags: ["db", "database"]
			},{				
				term: "open source",
				def:	"Open source is the idea of universal access available to the public.&nbsp;&nbsp;In terms of software, anyone is free to modify the code as they see fit.",
				tags: ["open source"]
			},{				
				term: "HTML",
				def:	"<span>H</span>yper<span>T</span>ext <span>M</span>arkup <span>L</span>anguage is the markup language for webpages.&nbsp&nbsp;HTML elements are the building blocks of all websites and web applications.&nbsp;&nbsp;The current version of HTML is 5.0, often styled as HTML5.",
				tags: ["html", "html5", "hypertext", "markup", "language"]
			},{				
				term: "CSS",
				def:	"<span>C</span>ascading <span>S</span>tyle <span>S</span>heets are used to change the display properties of HTML or XHTML markup.&nbsp;&nbsp;Almost all websites and web applications use CSS to style their content.&nbsp;&nbsp;The current version of CSS is 3.0",
				tags: ["css", "cascading", "style", "sheets"]
			},{
				term: "MVC",
				def:	"<span>M</span>odel-<span>V</span>iew-<span>C</span>ontroller",
				tags: ["model", "view", "controller", "framework"]
			},{				
				term: "Ruby",
				def:	"A programming language developed by Yukihiro 'Matz' Matsumoto, ruby is most famous for the MVC framework 'Ruby on Rails'.",
				tags: ["ruby"]
			},{
				term: "Ruby on Rails",
				def:	"A full-stack MVC framework built on the Ruby programming language, Ruby on Rails is one of the most popular web application frameworks in use today.",
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
				def:	"<span>J</span>ava<span>S</span>cript <span>O</span>bject <span>N</span>otation is a popular language-independent data format.&nbsp;&nbsp;AJAX development often uses JSON objects for data transfer.",
				tags: ["json", "javascript"]
			},{
				term: "AJAX",
				def:	"<span>A</span>synchronous <span>J</span>avaScript <span>A</span>nd <span>X</span>ML is a popular web development technique used on the client-side.&nbsp;&nbsp;This technique allows data transfer between client and server to happen asynchronously (behind the scenes) without page refreshing/reloading.&nbsp;&nbsp;Many web applications that feature dynamic content use AJAX.&nbsp;&nbsp;Although XML represents the 'X', many developers choose to use JSON as the data format instead.",
				tags: ["ajax", "ajaj", "asynchronous", "javascript", "xml"]
			},{				
				term: "API",
				def:	"<span>A</span>pplication <span>P</span>rogramming <span>I</span>nterface",
				tags: ["api", "application", "programming", "interface"]
			},{				
				term: "IDE",
				def:	"An <span>I</span>ntegrated <span>D</span>evelopment <span>E</span>nvironment",
				tags: ["integrated", "interactive", "development", "environment"]
			}
			
		];
			
		return glossary;
		
	});
