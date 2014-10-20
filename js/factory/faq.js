angular.module("factoryFaq", [])

	.factory("FAQ", function() {
		
		var faq = [
			
			{
				question:	"What is the difference between a website and a web application?",
				answer:		"A web application is a software program that runs online in the browser.&nbsp;&nbsp;A website is a collection of webpages wherein its content can be viewed online."
			},{
				question: "My laptop already has a text editor, why should I install sublime or atom.io?",
				answer:		"Your laptop's default text editor will work just fine but <a target='_blank' href='http://www.sublimetext.com/'>sublime</a> and <a target='_blank' href='https://atom.io/'>atom.io</a> offer many features that will make writing programming code easier.&nbsp;&nbsp;Syntax highlighting, tabbed file structure, and plugins for extra functionality are just some of the reasons that make those text editors so popular."
			},{
				question: "How can I get my laptop ready for Ruby on Rails development?",
				answer:		"Please see our <a target='_blank' href='http://docs.railsbridge.org/installfest/'>Installfest</a> guide on setting up your laptop for Ruby on Rails development."
			},{
				question: "Is a text editor and a word processor the same thing?",
				answer:		"You can write text in both, but they serve entirely different purposes.&nbsp;&nbsp;Text editors are used to edit plain text files (such as programming code).&nbsp;&nbsp;A word processor is used to create text documents for presentation.&nbsp;&nbsp;"
			},{
				question: "My application is running locally on my laptop, how can I make it available online?",
				answer:		"You have to deploy your application to a web hosting service.&nbsp;&nbsp;<a target='_blank' href='https://www.heroku.com/'>Heroku</a> allows you to host 5 applications for free.&nbsp;&nbsp;Please see our <a target='_blank' href='http://docs.railsbridge.org/installfest/'>Installfest</a> guide for instructions on heroku deployment.&nbsp;&nbsp;If your application is only front end (HTML, CSS and JavaScript files), you can use <a target='_blank' href='https://pages.github.com/'>GitHub Pages</a> as well."
			},{
				question: "What is the difference between Java and JavaScript?",
				answer:		"Despite their similarities in name, they are actually very different programming languages.  &nbsp;&nbsp;Java is class-based and compiles to run on Java virtual machine, where as JavaScript is prototype-based and is primariliy used as a browser scripting language."
			}
			
		];
			
		return faq;
		
	});
