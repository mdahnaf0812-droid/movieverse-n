const movieList = document.getElementById("movieList");

console.log("JS Loaded", movieList);

const movies = [
  {
    title: "Avengers Endgame",
    rating: "⭐ 4.8",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    title: "Spider-Man",
    rating: "⭐ 4.7",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  }
];

if (!movieList) {
  alert("movieList NOT FOUND");
}

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${movie.image}">
    <div class="overlay">
      <h3>${movie.title}</h3>
      <span>${movie.rating}</span>
    </div>
  `;

  movieList.appendChild(card);
});
