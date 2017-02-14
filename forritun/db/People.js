const TheMovieDB = require('./TheMovieDB');
class People extends TheMovieDB {
	getById(options, callback) {
		'use strict';
		this.validateRequired(arguments, 2, options, ["id"] );
	    this.client(
			{
				url: "person/" + options.id + "" + this.generateQuery(options)
			},
			callback
		)
	}
}
module.exports = People;