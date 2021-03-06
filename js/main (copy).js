'user strict';

let movielist= document.getElementById('movies');

function addMovieList(movie){
  let img = document.createElement('img');
  img.src=movie.Poster;
  movielist.appendChild(img);
}

function getData(url, done) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET",url);
  xhr.onload = function(){
    if(xhr.status === 200){
      let json = JSON.parse(xhr.response);
      console.log(json);
      done(json.Search);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = function(error){
    console.error(error);
  };
  xhr.send();
}

let search = 'man';

getData(`http://www.omdbapi.com/?s=${search}`, function(movies){
  console.log(JSON.s);
  movies.forEach(function(movie){
    addMovieList(movie);
  });
});
