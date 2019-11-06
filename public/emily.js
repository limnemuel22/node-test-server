const movies = require('./movies');
const emilysMovies = movies();
emilysMovies.favMovie = "The Notebook"
console.log("Emily's favorite movie is: " + emilysMovies.favMovie);