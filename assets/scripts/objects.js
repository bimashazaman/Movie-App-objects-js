const addMovieBtn = document.getElementById("add-movie-btn"); //get the add movie button
const searchBtn = document.getElementById("search-btn"); // get the search button

const movies = []; // create a movies array

const renderMovies = () => {
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

  movies.forEach((movie) => {
    // for each movie
    const movieEl = document.createElement("li"); // create a new li element
    movieEl.textContent = movie.info.title; // set the text content to the movie title
    movieList.appendChild(movieEl); // append the movie to the movie list
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

  movies.push(newMovie); // push the new movie to the movies array
  console.log(movies); // log the movies array
  renderMovies(); // render the movies
};

// Event Listeners
addMovieBtn.addEventListener("click", addMovieHandler); // add the add movie handler to the add movie button
