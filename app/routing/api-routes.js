var friendListData	= require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {

		res.json(friendListData);

	});

	app.post('/api/friends', function (req, res) {

		var result = [req.body.questionOne, req.body.questionTwo, req.body.questionThree, req.body.questionFour, req.body.questionFive, req.body.questionSix, req.body.questionSeven, req.body.questionEight, req.body.questionNine, req.body.questionTen];
		
		var mostCompatable = 50;

		var index = -1;

		for(var i = 0; i < friendListData.length; i++){

			var temp = 0;

			for(var j = 0; j < friendListData[i].scores.length; j++){

				temp = temp + Math.abs(friendListData[i].scores[j] - result[j]);

				console.log(temp);

			}

			if(temp < mostCompatable){

				mostCompatable = temp;

				index = i

			}

		}

		friendListData.push({name:req.body.FLname, photo: req.body.Picture, score:result});

		res.send('<p>Your Best Friend is ' + friendListData[index].name + '</p><img src="' + friendListData[index].photo + '">');

	});

};