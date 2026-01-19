const movies = [
  {
    title: "Avengers Endgame",
    poster: "https://i.imgur.com/8hP4Q2D.jpg",
    rating: "4.8",
    desc: "Earth’s mightiest heroes must come together to stop Thanos.",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: "Spider-Man",
    poster: "https://i.imgur.com/JHjZ9Qy.jpg",
    rating: "4.7",
    desc: "Peter Parker balances high school life with being Spider-Man.",
    trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE"
  }
];

const movieList = document.getElementById("movieList");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.poster}">
    <h4>${movie.title}</h4>
    <p>⭐ ${movie.rating}</p>
  `;

  card.onclick = () => {
    const url =
      `movie.html?title=${encodeURIComponent(movie.title)}` +
      `&poster=${encodeURIComponent(movie.poster)}` +
      `&rating=${movie.rating}` +
      `&desc=${encodeURIComponent(movie.desc)}` +
      `&trailer=${encodeURIComponent(movie.trailer)}`;

    window.location.href = url;
  };

  movieList.appendChild(card);
});
