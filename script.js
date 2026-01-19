const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");

function showMovies(list) {
  grid.innerHTML = "";
  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${m.poster}" />
      <div class="info">
        <h3>${m.title}</h3>
        <p>⭐ ${m.rating}</p>
      </div>
    `;
    card.onclick = () => {
      const url =
        `movie.html?title=${encodeURIComponent(m.title)}` +
        `&poster=${encodeURIComponent(m.poster)}` +
        `&rating=${encodeURIComponent(m.rating)}` +
        `&category=${encodeURIComponent(m.category)}` +
        `&desc=${encodeURIComponent(m.desc)}` +
        `&trailer=${encodeURIComponent(m.trailer)}`;
      window.location.href = url;
    };
    grid.appendChild(card);
  });
}

showMovies(movies);

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(val)
  );
  showMovies(filtered);
});
