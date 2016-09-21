'user strict';

let movielist= document.getElementById('movies');

var addMovieList = (movie) =>{
  let img = document.createElement('img');
  img.src=movie.Poster;
  movielist.appendChild(img);
};

var getData = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload = () => {
      if(xhr.status === 200){
        let json = JSON.parse(xhr.response);
        console.log(json);
        resolve(json.Search);
      } else {
      reject(xhr.statusText);
      }
    };
    xhr.onerror = (error) => reject(error);

    xhr.send();
  });
}

let search = 'bug';

getData(`http://www.omdbapi.com/?s=${search}`)  .then(movies =>
    movies.forEach(movie =>
      addMovieList(movie)))
  .catch(error => console.error(error));

$('.btn').click(function(event) {
$('#movies').html('');
  let search = $('.form-control').val();
  getData(`http://www.omdbapi.com/?s=${search}`)  .then(movies =>
      movies.forEach(movie =>
        addMovieList(movie)))
    .catch(error => console.error(error));

});
