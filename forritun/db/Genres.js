const TheMovieDB = require('./TheMovieDB');
class Genres extends TheMovieDB {
	getList(options, callback) {
		'use strict';
		this.validateRequired(arguments, 2, options, [] );
	    this.client(
			{
				url: "genre/movie/list" + this.generateQuery(options)
			},
			callback
		)
	}
	getMovies(options, callback) {
		'use strict';
		this.validateRequired(arguments, 2, options, ["id"] );
	    this.client(
			{
				url: "genre/" + options.id + "/movies" + this.generateQuery(options)
			},
			callback
		)
	}
}
module.exports = Genres;