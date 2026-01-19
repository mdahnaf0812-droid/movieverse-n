const movies = [
  {
    title: "Spider-Man",
    poster: "https://i.imgur.com/8QZ7QZy.jpg",
    rating: 4.7,
    category: "Movie",
    desc: "A young hero learns responsibility with great power.",
    trailer: "https://www.youtube.com/watch?v=t06RUxPbp_c"
  },
  {
    title: "Avengers Endgame",
    poster: "https://i.imgur.com/EuC4C9S.jpg",
    rating: 4.9,
    category: "Movie",
    desc: "Earth’s mightiest heroes unite to undo the snap.",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: "Naruto",
    poster: "https://i.imgur.com/J5LVHEL.jpg",
    rating: 4.8,
    category: "Anime",
    desc: "A ninja dreams of becoming the strongest leader.",
    trailer: "https://www.youtube.com/watch?v=-G9BqkgZXRA"
  }
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");

function showMovies(list) {
  movieList.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("a");
    card.className = "movie-card";
    card.href = `movie.html?title=${encodeURIComponent(movie.title)}
    &poster=${encodeURIComponent(movie.poster)}
    &rating=${movie.rating}
    &category=${movie.category}
    &desc=${encodeURIComponent(movie.desc)}
    &trailer=${encodeURIComponent(movie.trailer)}`;

    card.innerHTML = `
      <img src="${movie.poster}" />
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.rating}</p>
    `;

    movieList.appendChild(card);
  });
}

showMovies(movies);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value) ||
    movie.category.toLowerCase().includes(value)
  );
  showMovies(filtered);
});
