
const themoviedb = require('./../../db/TheMovieDB.js')
const Discover = require('./../../db/Discover.js')
const Genres = require('./../../db/Genres.js')
const discover = new Discover();
const genre = new Genres();

exports.index = function(req, res, next){
/*
	discover.getMovies({}, data=>{
		const popular = JSON.parse(data);
		res.render('index', {data: popular});
	});
	*/
		genre.getList({}, gldata=>{
		const genreList = JSON.parse(gldata);
		discover.getMovies({}, data=>{
			const popular = JSON.parse(data);
			let gen = [];
			genreList.genres.forEach(function(item, i) {
				genre.getMovies({id: item.id}, ldata=> {
					//console.log(ldata)
					const genreParse = JSON.parse(ldata);
					gen.push({
						name: item.name,
						id: item.id,
						data: genreParse
					})
					i++;
					if(gen.length === (genreList.genres.length)) {
						res.render('index', {data: popular, gdata: gen});
					}
				});
			})

		})

	});
	
};
