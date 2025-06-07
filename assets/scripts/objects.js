const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const inputList = [];

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

  inputList.push(input);
  movie.value = null;
  name.value = null;
  value.value = null;

  display(inputList);
}

function display(list = inputList) {
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
  let searchList = [];
  const searchMovie = document.getElementById('filter-title').value;
  for (input of inputList) {
    if (input.name.includes(searchMovie)) {
      searchList.push(input);
    }
  }
  if (searchList.length === 0) {
    alert('Not found !');
    display();
  } else {
    display(searchList);
  }
}

addMovieButton.addEventListener('click', getInput);
searchButton.addEventListener('click', search);
