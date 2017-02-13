const themoviedb = require('./../../db/TheMovieDB.js')
const People = require('./../../db/People.js')
const db = new People();

exports.show = function(req, res, next){
	db.getById({id: req.params.people_id}, data=>{
		const people = JSON.parse(data);
		res.render('person', {data: people});
	});
  	
};