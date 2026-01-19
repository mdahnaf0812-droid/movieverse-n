// ===== MOVIE DATA =====
const movies = [
  {
    title: "Avengers",
    poster: "https://i.imgur.com/8UG2KQx.jpg",
    rating: "⭐ 4.5",
    category: "Movie"
  },
  {
    title: "Spider-Man",
    poster: "https://i.imgur.com/3jLPB46.jpg",
    rating: "⭐ 4.7",
    category: "Movie"
  },
  {
    title: "Batman",
    poster: "https://i.imgur.com/6Iej2c3.jpg",
    rating: "⭐ 4.6",
    category: "Movie"
  },
  {
    title: "Naruto",
    poster: "https://i.imgur.com/OVx1K3F.jpg",
    rating: "⭐ 4.8",
    category: "Anime"
  }
];

// ===== RENDER MOVIES =====
const movieList = document.getElementById("movieList");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="overlay">
      <h3>${movie.title}</h3>
      <span>${movie.rating}</span>
    </div>
  `;

  movieList.appendChild(card);
});
