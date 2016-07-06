var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"message": "Hello World!",
	"name": "Rajan"
}

var template = Handlebars.compile(containerTpl);

container.innerHTML = template(jsonData);