var cl = console.log;

var postarray = [
	{
		title: "angular js",
		content: "AngularJS is a JavaScript framework designed to extend the syntax of HTML."

	},

	{
		title: "html5",
		content: "HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling."

	},

	{
		title: "javascript",
		content: "JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. "

	},

	{
		title: "rx.js",
		content: "a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code."

	},

	{
		title: "node.js",
		content: "Developers use Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model."

	},

]


var result = '';

for (let i = 0; i < postarray.length; i++) {
	cl(postarray[i])
	result += `
	<div class="col-md-3 mb-0">
	<div class="card">
	<div class="card-header">
	<h3 class="mb-0">
	${postarray[i].title}
	
	</h3>
	</div>
	<div class="card-body">
	<p class="m-0">
	${postarray[i].content}
	</p>
	</div>
	
	
	<div class="card-footer">
	<button class="btn btn-primary">edit</button>
	<button class="btn btn-danger"> delete </button>
	<button class="btn btn-secondary"> exit </button>
	</div>
	
	
	</div>
	</div>
`
}
var result2 = document.getElementById("postcontainer");

postcontainer.innerHTML = result;










