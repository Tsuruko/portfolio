var projectImages = require('../public/json/projectImages.json');
var projectsList =  require('../public/json/projectsList.json');

exports.view = function(req, res){
	var json =  { "projectsList" : projectsList,
				  "projectImages": projectImages
				};

	res.render('index', json);
}


var CSE190_1_img = require('../public/json/CSE190_1_img.json');
var CSE190_1_desc = require('../public/json/CSE190_1_desc.json');

exports.viewCSE190Assignment1 = function(req, res) {
	var json =  { "CSE190_1_img" : CSE190_1_img,
				  "CSE190_1_desc": CSE190_1_desc
				};

	res.render('CSE190/Assignment1', json);
}

exports.viewCSE190Assignment3 = function(req, res) {
	res.render('CSE190/Assignment3', cse190_1);
}