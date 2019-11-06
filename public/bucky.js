const movies = require('./movies');
const buckysMovies = movies();
buckysMovies.favMovie = "Good will hunting";
console.log("Bucky's favorite movie is: " + buckysMovies.favMovie);