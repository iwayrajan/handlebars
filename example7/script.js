var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"employees": [{
		"name": "Rajan",
		"department": "Engineering"
	}, {
		"name": "Rajan1",
		"department": "Management"
	}, {
		"name": "Rajan2",
		"department": "Engineering"
	}, {
		"name": "Rajan3",
		"department": "Management"
	}, {
		"name": "Rajan4",
		"department": "Engineering"	
	}]
};

Handlebars.registerHelper('getDepartmentCode', function(department){
	if(department === 'Management') {
		return "M";
	} else {
		return "E";
	}
});

var template = Handlebars.compile(containerTpl);

container.innerHTML = template({data: jsonData});