let currentFilm = 0;
let films = [];

function getFilms() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var filmsList = JSON.parse(this.responseText);
            films = filmsList;
            displayMovie();
        }
    };

    xhttp.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
}

function displayMovie() {
    let film = films[currentFilm];

    var movieBanner = document.getElementById("movieBanner");
    movieBanner.src = film.movie_banner;

    var movieImg = document.getElementById("movieImg");
    movieImg.src = film.image;

    var title = document.getElementById("title");
    title.innerHTML = "<h1>" + film.title + "</h1>";

    var description = document.getElementById("description");
    description.innerHTML = "<p>" + film.description + "<p>";

    var director = document.getElementById("director");
    director.innerHTML = "Directed by: " + film.director;

    var producer = document.getElementById("producer");
    producer.innerHTML = "Produced by: " + film.producer;

    var release = document.getElementById("release");
    release.innerHTML = "Released: " + film.release_date;

    var runTime = document.getElementById("runTime");
    runTime.innerHTML = "Runtime: " + film.running_time + " minutes";



}

function next() {
    currentFilm++;
    if (currentFilm == films.length) {
        currentFilm = 0;
    }
    displayMovie();
}

function prev() {
    currentFilm--;
    if (currentFilm == -1) {
        currentFilm = films.length - 1;
    }
    displayMovie();
}