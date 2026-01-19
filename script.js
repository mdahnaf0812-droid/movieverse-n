document.addEventListener("DOMContentLoaded", () => {

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

  if (!movieList) {
    console.error("movieList div not found");
    return;
  }

  movieList.innerHTML = "";

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="overlay">
        <h3>${movie.title}</h3>
        <span>⭐ ${movie.rating}</span>
      </div>
    `;

    movieList.appendChild(card);
  });

});
