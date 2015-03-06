
exports.viewProject = function(req, res) {
	var name = req.params.name; 
	res.render(name);
}

exports.viewProjPage = function(req, res) {
	res.render('projects');
}
