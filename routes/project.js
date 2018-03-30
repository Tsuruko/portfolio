var projectsGraphics = require('../projectsGraphics.json');
var projectsGeneral = require('../projectsGeneral.json');

var cse190_1 = require('../CSE190_1.json');
var cse190_2 = require('../CSE190_2.json');


exports.viewProject = function(req, res) {
	var name = req.params.name;
	res.render(name);
}

exports.viewProjPage = function(req, res) {
	var json = { "projectsGraphics" : projectsGraphics, 
				 "projectsGeneral" : projectsGeneral
				};
	res.render('projects', json);
}


exports.viewProjectSection = function(req, res) {
	var name = req.params.name;
	var section = req.params.section;
	var url = name + "/" + section;

	if (section == "Assignment1") {
		res.render(url, cse190_1);
	} else {
		res.render(url, cse190_2);
	}


}