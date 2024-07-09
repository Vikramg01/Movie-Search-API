const api = "https://www.omdbapi.com/?apikey=61e576a4&t=";

function searchMovies() {
    let query = document.getElementById("movieName").value;
    // console.log(query);

    let search = api + query;

    fetch(search).then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);

        document.getElementById("title").innerText = response.Title;
        document.getElementById("desc").innerHTML = response.Plot;
        document.getElementById("genre").textContent = response.Genre;
        document.getElementById("actors").innerHTML = response.Actors;
        document.getElementById("directors").innerHTML = response.Director;
        document.getElementById("writers").innerHTML = response.Writer;
        document.getElementById("collection").innerHTML = response.BoxOffice;
        document.getElementById("awards").innerHTML = response.Awards;
        document.getElementById("ratings").innerHTML = response.imdbRating;
        document.getElementById("poster").src = response.Poster;


        document.querySelector(".container").style.display = "flex";
    })
}