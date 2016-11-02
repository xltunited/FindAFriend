var friendListData	= require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {

		res.json(friendListData);

	});

	app.post('/api/friends', function (req, res) {
	
		console.log(req.body);

	});

};