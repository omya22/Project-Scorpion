
$(window).load(function(){
   $('#search').keyup(function(){
            var searchField = $('#search').val();
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
            var img_url = 'https://image.tmdb.org/t/p/w500';
            if(searchField.length > 0 ) {
            $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=5caf95feed570ed071f7cb0839668613&query=' + searchField, function(data) {
                $.each(data.results, function(key, val){
                  console.log(val);
                    if (val.media_type === 'movie') {
                      output += '<div class="large-4"><img class="img-responsive" src="'+ img_url + val.poster_path +'" alt="'+ val.title +'" /></div>';
                      output += '<div class="large-8">';
                      output += '<h5>' + val.title + '</h5>';
                      output += '<p>' + val.title + '</p>'
                      output += '</div>';
                    }
                    if (val.media_type === 'person') {
                      output += '<div class="large-4"><img class="img-responsive" src="'+ img_url + val.profile_path +'" alt="'+ val.name +'" /></div>';
                      output += '<div class="large-8">';
                      output += '<p>' + val.name + '</p>'
                      output += '</div>';
                    }

                });
                output += '</div>';
                $('#results').html(output);
              }); 
          }
      });
 });
/*


$("#searchterm").keyup(function(e){
    var q = $("#searchterm").val();
    $.ajax({
      url: "https://api.themoviedb.org/3/search/multi?api_key=5caf95feed570ed071f7cb0839668613&query=" + q,
    }).done(function() {
      $("#results").empty();
      $("#results").append("Results for <b>" + q + "</b>");
      $.each(data.query.search, function(i,item){
        $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a>" + item.snippet + "</div>");
      });
    });
  });
  */