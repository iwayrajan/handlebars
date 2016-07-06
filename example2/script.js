var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"title": "Learning Handlebars.js",
	"fname": "Rajan",
	"lname": "Kumar",
	"address": {
		"city": "Pune",
		"country": "India"
	}
};

var template = Handlebars.compile(containerTpl);

container.innerHTML = template({data: jsonData});