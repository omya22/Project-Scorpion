function search() {
    $('#search').keyup(function(){
        var searchField = $('#search').val();
        var output = '';
        if (searchField.length === 0) {
            output = '';
            $('.results').html(output);
        }
        if (searchField.length > 0) {
            $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=5caf95feed570ed071f7cb0839668613&query=' + searchField, function(data) {
                $.each(data.results, function(key, val){
                    console.log(val)
                        if (val.media_type === 'person') {
                            if (val.profile_path != null) {
                                if (val.profile_path.length > 0) {
                                    output += '<div class="row searchItem">\
                                                <div class="small-4 medium-2 column">\
                                                    <img src="https://image.tmdb.org/t/p/w500' + val.profile_path + '">\
                                                </div>\
                                                <div class="small-8 medium-10 column">\
                                                    <div class="movie-title">' + val.name + '</div>\
                                                    <div class="column"></div>\
                                                </div>\
                                            </div>'
                                } 
                            }
                        }
                        else if (val.media_type === 'movie') {
                            if (val.poster_path != null) {
                                if (val.poster_path.length > 0) {
                                    output += '<div class="row searchItem">\
                                                <div class="small-4 medium-2 column">\
                                                    <img src="https://image.tmdb.org/t/p/w500' + val.poster_path + '">\
                                                </div>\
                                                <div class="small-8 medium-10 column">\
                                                    <div class="movie-title">' + val.title + '</div>\
                                                    <div class="column">' + val.overview.slice(0,130) + '...</div>\
                                                </div>\
                                            </div>'
                                } 
                                    
                            }
                        }
                        else if (val.media_type === 'tv') {
                            if (val.poster_path != null) {
                                if (val.poster_path.length > 0) {
                                    output += '<div class="row searchItem">\
                                                <div class="small-4 medium-2 column">\
                                                    <img src="https://image.tmdb.org/t/p/w500' + val.poster_path + '">\
                                                </div>\
                                                <div class="small-8 medium-10 column">\
                                                    <div class="movie-title">' + val.name + '</div>\
                                                    <div class="column"></div>\
                                                </div>\
                                            </div>'
                                }   
                            }
                        }
                });
                $('.results').html(output);
            }); 
        }
    });
}