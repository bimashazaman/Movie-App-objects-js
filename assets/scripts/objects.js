const addMovieBtn = document.getElementById("add-movie-btn"); //get the add movie button
const searchBtn = document.getElementById("search-btn"); // get the search button

const movies = []; // create a movies array

const renderMovies = (filter = '') => {
  // render movies function
  const movieList = document.getElementById("movie-list"); // get the movie list
  if (movies.length === 0) {
    // if there are no movies
    movieList.classList.remove("visible"); // remove the visible class
    return; // return from the function
  } else {
    // if there are movies
    movieList.classList.add("visible"); // add the visible class
  }
  movieList.innerHTML = ""; // clear the movie list

  const filteredMovies = filter !== '' ? movies.filter(movie => movie.info.title.includes(filter)) : movies; // filter the movies


  filteredMovies.forEach((movie) => {
    // for each movie in the movies array
    const movieEl = document.createElement("li"); // create a new li element
    const title = document.createElement("h2"); // create a new h2 element
    const extra = document.createElement("span"); // create a new span element

    title.textContent = movie.info.title; // set the title text content
    extra.textContent = `${movie.info.extra.name}: ${movie.info.extra.value}`; // set the extra text content

    movieEl.appendChild(title); // append the title to the li element
    movieEl.appendChild(extra); // append the extra to the li element

    movieList.appendChild(movieEl); // append the li element to the movie list
    
  });
};

const addMovieHandler = () => {
  // add movie handler
  const movieTitle = document.getElementById("title").value; // get the movie title from the input
  const extraName = document.getElementById("extra-name").value; // get the extra name from the input
  const extraValue = document.getElementById("extra-value").value; // get the extra value from the input

  if (
    // if the movie title is empty
    movieTitle.trim() === "" || // or the extra name is empty
    extraName.trim() === "" || // or the extra value is empty
    extraValue.trim() === "" // or the extra value is empty
  ) {
    alert("Please fill all fields"); // alert the user
    return; // return from the function
  }

  const newMovie = {
    // create a new movie object
    info: {
      // create a new info object
      title: movieTitle, // set the title
      extra: {
        // create a new extra object
        name: extraName, // set the extra name
        value: extraValue, // set the extra value
      }, // end of extra object
    }, // end of info object
    id: Math.random().toString(), // set the id
  };

  movies.unshift(newMovie); // push the new movie to the movies array
  console.log(movies); // log the movies array
  renderMovies(); // render the movies
};


const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value; // get the filter term from the input
    renderMovies(filterTerm); // render the movies

}   

// Event Listeners
addMovieBtn.addEventListener("click", addMovieHandler); // add the add movie handler to the add movie button
searchBtn.addEventListener("click",searchMovieHandler); // add the render movies handler to the search button