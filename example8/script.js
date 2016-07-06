var containerTpl = document.querySelector("#container-template").innerHTML;
var container = document.querySelector("#container");

var jsonData = {
	"employees": [{
		"name": "Rajan",
		"department": "Engineering",
		"skills": [
			"HTML", "CSS", "JavaScript"
		]
	}, {
		"name": "Rajan1",
		"department": "Management",
		"skills": [
			"HTML1", "CSS", "JavaScript"
		]
	}, {
		"name": "Rajan2",
		"department": "Engineering",
		"skills": [
			"HTML2", "CSS", "JavaScript"
		]
	}, {
		"name": "Rajan3",
		"department": "Management",
		"skills": [
			"HTML3", "CSS", "JavaScript"
		]
	}, {
		"name": "Rajan4",
		"department": "Engineering"	,
		"skills": [
			"HTML4", "CSS", "JavaScript"
		]
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