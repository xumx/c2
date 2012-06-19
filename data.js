var data = function() {
    	var mongoose = require('mongoose')
		var log = console.log;
		var challenges;

		//mongodb.Db.connect(process.env.MONGOHQ_URL, function(error, db) {
		// Mongodb schema
		var Schema = mongoose.Schema;

		var PostSchema = new Schema({
			body: String
		});

		var ChallengeSchema = new Schema({
			title: String,
			body: String,
			posts: [PostSchema],
			date: Date
		});

		mongoose.connect('process.env.MONGOHQ_URL');

		var Post = mongoose.model('Post', PostSchema);
		var Challenge = mongoose.model('Challenge', ChallengeSchema);
		console.log("Server up");
	};

module.exports = data;
