const movies = [
  {
    title: "Spider-Man",
    poster: "https://i.imgur.com/8UG2ZQp.jpg",
    rating: "4.7"
  },
  {
    title: "Avengers Endgame",
    poster: "https://i.imgur.com/e1hLQ2k.jpg",
    rating: "4.8"
  }
];

const movieList = document.getElementById("movieList");

function loadMovies(list){
  movieList.innerHTML = "";
  list.forEach(movie => {
    movieList.innerHTML += `
      <div class="card">
        <img src="${movie.poster}">
        <div class="overlay">
          <h3>${movie.title}</h3>
          <span>⭐ ${movie.rating}</span>
        </div>
      </div>
    `;
  });
}

loadMovies(movies);

document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
  loadMovies(filtered);
});
