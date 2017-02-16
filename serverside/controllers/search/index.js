const themoviedb = require('./../../db/TheMovieDB.js')
const Search = require('./../../db/Search.js')
const search = new Search();
exports.index2 = function(req, res, next){
	search.getMulti({query: req.query.query, page:req.query.page}, data=> {
		const dataSearch = JSON.parse(data);
		res.render('search', {searchData: dataSearch});
	})
};