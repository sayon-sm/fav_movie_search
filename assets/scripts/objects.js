const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const list = [];

const movieList = document.getElementById('movie-list');

function getInput() {
  let movie = document.getElementById('title');
  let name = document.getElementById('extra-name');
  let value = document.getElementById('extra-value');

  const input = {
    name: movie.value,
    title: name.value,
    value: value.value,
  };

  for (const key in input) {
    if (input[key].trim() === '') {
      alert('INVALID INPUT !');
      return;
    }
  }

  list.push(input);
  movie.value = null;
  name.value = null;
  value.value = null;

  display(list);
}

function display(list) {
  movieList.innerHTML = '';
  movieList.classList.add('visible'); //bug adds multiple visible class
  for (const input of list) {
    const { name } = input;
    const text = `${name.toUpperCase()}  ${input.title} - ${input.value}`;
    const movie = document.createElement('li');
    movie.textContent = text;
    movieList.appendChild(movie);
  }
}

function search() {
  const searchMovie = document.getElementById('filter-title').value;
  for (input of list) {
    for (key in input) {
      if (input[key].includes(searchMovie)) {
        display(input);
      }
    }
  }
}

addMovieButton.addEventListener('click', getInput);
searchButton.addEventListener('click', search);
