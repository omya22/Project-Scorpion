const TheMovieDB = require('./TheMovieDB');
class Discover extends TheMovieDB {
	getMovies(options, callback) {
		'use strict';
		this.validateRequired(arguments, 2, options, [] );
	    this.client(
			{
				url: "discover/movie" + this.generateQuery(options)
			},
			callback
		)
	}
	getTvShows(options,success,error) {
		this.client({url: "discover/tv" + db.generateQuery(options)})
	}
}
module.exports = Discover;