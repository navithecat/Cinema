

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg2NWM3ZWE5OWIxZmQwNzUxY2I1NWU2NDY0OTQzMyIsIm5iZiI6MTcyMjIxMzI0My43Mzg4OTIsInN1YiI6IjY2YTIzOTdmZWJiYmE4NzM3NmNhN2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhw4Ersf8omm9jaeO8GkXlUYvQc6Ld2z75PwDOpahL8'
  }
};
console.log(1)

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    const movies = response.results;
    console.log(movies)
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  }
  )
  .catch(err => console.error(err));

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <span>Rating: ${movie.vote_average}</span>
    `;
  card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
  return card;
}

document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const movieCards = document.querySelectorAll('.movie-card');
  movieCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
