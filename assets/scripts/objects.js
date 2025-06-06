const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const list = [];

const searchMovie = document.getElementById('filter-title').value;

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
    if (input[key] === '') {
      alert('INVALID INPUT !');
      return;
    }
  }

  list.push(input);
  movie.value = null;
  name.value = null;
  value.value = null;

  return input;
}

function display() {
  input = getInput();
  if (input) {
    console.log(input);
    const movie = document.createElement('li');
    movie.textContent = input.name;
    movieList.appendChild(movie);

    if (list.includes(input)) {
      movieList.classList.add('visible');
    }
  } else {
    alert('fill out all the input fields');
  }
}

addMovieButton.addEventListener('click', display);
// searchButton.addEventListener('click');
