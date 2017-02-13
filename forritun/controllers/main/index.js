
const themoviedb = require('./../../db/TheMovieDB.js')
const Discover = require('./../../db/Discover.js')
const Genres = require('./../../db/Genres.js')
const discover = new Discover();
const genre = new Genres();

exports.index = function(req, res, next){
	//db.getMovies({view: 'index'}, req, res);
	genre.getList({}, gldata=>{
		const genreList = JSON.parse(gldata);
		discover.getMovies({}, data=>{
			const popular = JSON.parse(data);
			let gen = [];
			let genlist = [];
			genreList.genres.forEach(function(item, i) {
				genre.getMovies({id: item.id}, ldata=> {
					//console.log(ldata)
					const genreParse = JSON.parse(ldata);
					gen.push({
						name: item.name,
						data: genreParse
					})
					i++;
					if(i === (genreList.genres.length - 1)) {
						res.render('index', {data: popular, gdata: gen});
					}
				});
			})

		})

	});



        

/*
		genre.getList({}, gdata=>{
			const genreList = JSON.parse(gdata);
			console.log(genreList)
			genreList.genres.forEach(function(item) {
				genre.getMovies({genre_id: item.id}, ldata=> {

				})
				res.render('index', {data: popular, gdata: genreList});
			});
			})
	});*/
  	
};