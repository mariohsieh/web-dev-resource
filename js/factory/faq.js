angular.module("factoryFaq", [])

	.factory("FAQ", function() {
		
		var faq = [
			
			{
				question:	"What is the difference between a website and a web application?",
				answer:		"A web application is an online software program that is dependent on user interaction."
			},{
				question: "My laptop already has a text editor, why should I install sublime or atom.io?",
				answer:		"Your laptop's default text editor will work just fine but sublime and atom.io offer many features that will make writing programming code easier.&nbsp;&nbsp;Syntax highlighting, tabbed file structure, and plugins for extra functionality are just some of the reasons that make those text editors so popular."
			},{
				question: "How can I get my laptop ready for Ruby on Rails development?",
				answer:		"Please see our <a target='_about' href='http://docs.railsbridge.org/installfest/'>Installfest</a> guide."
			},{
				question: "Is a text editor and a word processor the same thing?",
				answer:		"No, will explain later."
			},{
				question: "My application is running on my localhost, how can I make it available online?",
				answer:		"Deployment"
			}
			
		];
			
		return faq;
		
	});
