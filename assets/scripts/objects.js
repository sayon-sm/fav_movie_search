'use strict';
const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

// holds the input data
const inputList = [];

// UI to display input data
const movieList = document.getElementById('movie-list');

// gets input from input fields and stores it as object
function getInput() {
  let movie = document.getElementById('title');
  let name = document.getElementById('extra-name');
  let value = document.getElementById('extra-value');

  const input = {
    name: movie.value,
    title: name.value,
    value: value.value,
  };

  // check if any input field is empty
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

// renders the list of inputs
function display(list = inputList) {
  movieList.innerHTML = '';
  movieList.classList.add('visible');
  for (const input of list) {
    const { name } = input;
    const text = `${name.toUpperCase()}  ${input.title} - ${input.value}`;
    const movie = document.createElement('li');
    movie.textContent = text;
    movieList.appendChild(movie);
  }
}

// searches for title matching search criteria
function search() {
  let searchList = []; // holds the objects that match the search criteria
  const searchMovie = document.getElementById('filter-title').value;
  for (const input of inputList) {
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
