class TheMovieDB {
    constructor() {
        this.api_key = '5caf95feed570ed071f7cb0839668613';
        this.base_uri = 'https://api.themoviedb.org/3/';
    }
    generateQuery( options ) {
        'use strict';
        let myOptions, query, option;
        myOptions = options || {}
        query = "?api_key=" + this.api_key;
        if ( Object.keys( myOptions ).length > 0 ) {
            for ( option in myOptions ) {
                if ( myOptions.hasOwnProperty( option ) && option !== "id" && option !== "body" ) {
                    query = query + "&" + option + "=" + myOptions[ option ];
                }
            }
        }
        return query;
    }
    validateCallbacks( callbacks ) {
        'use strict';
        if ( typeof callbacks[ 0 ] !== "function" || typeof callbacks[ 1 ] !== "function" ) {
            throw "Success and error parameters must be functions!";
        }
    }
    validateRequired( args, argsReq, opt, optReq, allOpt ) {
        'use strict';
        let i, allOptional;
        allOptional = allOpt || false;
        if ( args.length !== argsReq ) {
            throw "The method requires  " + argsReq + " arguments and you are sending " + args.length + "!";
        }
        if ( allOptional ) {
            return;
        }
        if ( argsReq > 2 ) {
            for ( i = 0; i < optReq.length; i = i + 1 ) {
                if ( !opt.hasOwnProperty( optReq[ i ] ) ) {
                    throw optReq[ i ] + " is a required parameter and is not present in the options!";
                }
            }
        }
    }
    client( options) {
        'use strict';
        let method, status, xhr;
        method = options.method || "GET";
        status = options.status || 200;
        xhr = new XMLHttpRequest();
        xhr.ontimeout = function() {
            error( '{"status_code":408,"status_message":"Request timed out"}' );
        };
        xhr.open( method, this.base_uri + options.url, true );
        if ( options.method === "POST" ) {
            xhr.setRequestHeader( "Content-Type", "application/json" );
            xhr.setRequestHeader( "Accept", "application/json" );
        }
        xhr.timeout = this.timeout;
        xhr.onload = function( e ) {
            if ( xhr.readyState === 4 ) {
                if ( xhr.status === status ) {
                    var jData = JSON.parse( xhr.responseText );
                    return xhr.responseText;
                } else {
                    return xhr.responseText;
                }
            } else {
                    return xhr.responseText;
            }
        };
        xhr.onerror = function( e ) {
            error( xhr.responseText );
        };
        if ( options.method === "POST" ) {
            xhr.send( JSON.stringify( options.body ) );
        } else {
            xhr.send( null );
        }
    }
    getApi(options) {
        /*
        $.get(this.base_uri + options.url, function (temp) {
            return temp;
        });
        */
        var result = null;
         $.ajax({
            url: this.base_uri + options.url,
            type: 'get',
            dataType: 'json',
            async: false,
            success: function(data) {
                result = data;
            } 
         });
         return result

    }
}
class Genres extends TheMovieDB {
    getList(options) {
        'use strict';
        this.validateRequired(arguments, 1, options, [] );
        return this.getApi(
            {
                url: "genre/movie/list" + this.generateQuery(options)
            }
        )
    }
    getMovies(options) {
        'use strict';
        this.validateRequired(arguments, 1, options, ["id"] );
        return this.getApi(
            {
                url: "genre/" + options.id + "/movies" + this.generateQuery(options)
            }
        )
    }
}
class Movies extends TheMovieDB {
    getById(options) {
        this.validateRequired(arguments, 1, options, [] );
        return this.getApi(
            {
                url: "movie/" + options.id + this.generateQuery(options)
            }
        )
    }
    getAccountStates() {

    }
    getAlternativeTitles() {}
    getChanges() {}
    getCredits(options, callback) {
        this.validateRequired(arguments, 1, options, ["id"] );
        return this.getApi(
            {
                url: "movie/" + options.id + "/credits" + this.generateQuery(options)
            }
        )
    }
    getImages(options, callback) {
        this.validateRequired(arguments, 1, options, ["id"] );
        return this.getApi(
            {
                url: "movie/" + options.id + "/images" + this.generateQuery(options)
            }
        )
    }
    getKeywords() {}
    getReleaseDates() {}
    getTrailers(options, callback) {    
        this.validateRequired(arguments, 1, options, ["id", "type"] );
        return this.getApi(
            {
                url: "movie/" + options.id + "/videos" + this.generateQuery(options)
            }
        )

    }

    getVideos() {}
    getTranslations() {}
    getRecommendations() {}
    getSimilarMovies(options,callback) {
        this.validateRequired(arguments, 1, options, ["id"] );
        return this.getApi(
            {
                url: "movie/" + options.id + "/similar" + this.generateQuery(options)
            }
        )
    }
    getReviews() {}
    getLists() {}
    rateMovie() {}
    deleteRating() {}
    getLatest() {}
    getNowPlaying() {}
    getPopular(options,callback) {
        this.validateRequired(arguments, 1, options, [] );
        return this.getApi(
            {
                url: "movie/popular" + this.generateQuery(options)
            }
        )
    }
    getTopRated() {}
    getUpcoming() {}

}
class Search extends TheMovieDB {
    getMovies(options) {
        'use strict';
        this.validateRequired(arguments, 1, options, [] );
        return this.getApi(
            {
                url: "search/movie" + this.generateQuery(options)
            }
        )
    }
    getMulti(options) {
        'use strict';
        this.validateRequired(arguments, 1, options, ["query", "page"] );
        return this.getApi(
            {
                url: "search/multi" + this.generateQuery(options)
            }
        )
    }
}
