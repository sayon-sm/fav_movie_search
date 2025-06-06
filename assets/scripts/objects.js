const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const list = [];

const searchMovie = document.getElementById('filter-title').value;

const display = document.getElementById('movie-list');

function getInput() {
  let movie = document.getElementById('title');
  let name = document.getElementById('extra-name');
  let value = document.getElementById('extra-value');

  const input = {
    name: movie.value,
    title: name.value,
    value: value.value,
  };

  list.push(input);
  movie.value = null;
  name.value = null;
  value.value = null;

  return input;
}

addMovieButton.addEventListener('click', getInput);
// searchButton.addEventListener('click');
