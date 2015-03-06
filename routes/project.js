
exports.viewProject = function(req, res) {
	var name = req.params.name; 
	console.log("The project name is: " + name);
	res.render(name);
}

exports.viewProjPage = function(req, res) {
	res.render('projects');
}
