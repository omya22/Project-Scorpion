const TheMovieDB = require('./TheMovieDB');
class Search extends TheMovieDB {
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
	getMulti(options, callback) {
		'use strict';
		this.validateRequired(arguments, 2, options, ["query", "page"] );
	    this.client(
			{
				url: "search/multi" + this.generateQuery(options)
			},
			callback
		)
	}
}
module.exports = Search;