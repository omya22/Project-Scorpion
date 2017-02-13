const TheMovieDB = require('./TheMovieDB');
class Movies extends TheMovieDB {
	getById(options, callback) {
		this.validateRequired(arguments, 2, options, [] );
		this.client(
			{
				url: "movie/" + options.id + this.generateQuery(options)
			},
			callback
		)
	}
	getAccountStates() {

	}
	getAlternativeTitles() {}
	getChanges() {}
	getCredits(options, callback) {
		this.validateRequired(arguments, 2, options, ["id"] );
		this.client(
			{
				url: "movie/" + options.id + "/credits" + this.generateQuery(options)
			},
			callback
		)
	}
	getImages() {}
	getKeywords() {}
	getReleaseDates() {}
	getTrailers() {}
	getVideos() {}
	getTranslations() {}
	getRecommendations() {}
	getSimilarMovies() {
		this.validateRequired(arguments, 2, options, ["id"] );
		this.client(
			{
				url: "movie/" + options.id + "/credits" + this.generateQuery(options)
			},
			callback
		)
	}
	getReviews() {}
	getLists() {}
	rateMovie() {}
	deleteRating() {}
	getLatest() {}
	getNowPlaying() {}
	getPopular() {}
	getTopRated() {}
	getUpcoming() {}

}

module.exports = Movies;