var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"author": [{
		"name": "Rajan",
		"department": "Engineering"
	}, {
		"name": "Rajan1",
		"department": "Engineering"
	}, {
		"name": "Rajan2",
		"department": "Engineering"
	}, {
		"name": "Rajan3",
		"department": "Engineering"
	}, {
		"name": "Rajan4",
		"department": "Engineering"	
	}]
};

var template = Handlebars.compile(containerTpl);

container.innerHTML = template({data: jsonData});