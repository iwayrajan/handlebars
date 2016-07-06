var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"title": "<h1>Learning Handlebars.js</h1>",
	"name": "<h2>Rajan Kumar</h2>"
};

var template = Handlebars.compile(containerTpl);

container.innerHTML = template({data: jsonData});