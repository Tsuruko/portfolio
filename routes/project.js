var projectsGraphics = require('../projectsGraphics.json');
var projectsGeneral = require('../projectsGeneral.json');


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
	console.log(url);
	res.render(url);
}