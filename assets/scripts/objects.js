const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const list = [];

const searchMovie = document.getElementById('filter-title').value;

const display = document.getElementById('movie-list');

function getInput() {
  const movie = document.getElementById('title').value;
  const name = document.getElementById('extra-name').value;
  const value = document.getElementById('extra-value').value;

  const input = {
    name: movie,
    title: name,
    value: value,
  };

  list.push(input);
}

addMovieButton.addEventListener('click', getInput);
searchButton.addEventListener('click');
