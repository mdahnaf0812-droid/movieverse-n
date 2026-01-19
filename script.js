const grid = document.getElementById("movieGrid");
const search = document.querySelector("input");

function showMovies(list) {
  grid.innerHTML = "";
  list.forEach(m => {
    grid.innerHTML += `
      <a class="movie-card" href="movie.html?title=${encodeURIComponent(m.title)}&poster=${encodeURIComponent(m.poster)}&rating=${m.rating}&category=${m.category}&desc=${encodeURIComponent(m.desc)}&trailer=${encodeURIComponent(m.trailer)}">
        <img src="${m.poster}">
        <h3>${m.title}</h3>
        <p>⭐ ${m.rating}</p>
      </a>
    `;
  });
}

showMovies(movies);

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(value)
  );
  showMovies(filtered);
});