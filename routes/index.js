var projectImages = require('../public/json/projectImages.json');
var projectsList =  require('../public/json/projectsList.json');

exports.view = function(req, res){
	var json =  { "projectsList" : projectsList,
				  "projectImages": projectImages
				};

	res.render('index', json);
}


var cse190_1 = require('../public/json/CSE190_1.json');

exports.viewCSE190Assignment1 = function(req, res) {
	res.render('CSE190/Assignment1', cse190_1);
}

exports.viewCSE190Assignment3 = function(req, res) {
	res.render('CSE190/Assignment3', cse190_1);
}