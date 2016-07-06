var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"author": {
		"firstname": "Rajan",
		"lastname": "Kumar"
	}
};

var template = Handlebars.compile(containerTpl);

container.innerHTML = template({data: jsonData});