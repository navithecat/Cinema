const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg2NWM3ZWE5OWIxZmQwNzUxY2I1NWU2NDY0OTQzMyIsIm5iZiI6MTcyMTkxMzY4Ni4yNDUwOTEsInN1YiI6IjY2YTIzOTdmZWJiYmE4NzM3NmNhN2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us-KtX5q-4qFiHtUU5iW38Sjifzsfab-7Ogxq3oPogk'
  }
}

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg2NWM3ZWE5OWIxZmQwNzUxY2I1NWU2NDY0OTQzMyIsIm5iZiI6MTcyMTkxMzY4Ni4yNDUwOTEsInN1YiI6IjY2YTIzOTdmZWJiYmE4NzM3NmNhN2NjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us-KtX5q-4qFiHtUU5iW38Sjifzsfab-7Ogxq3oPogk';
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error:', error));

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

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));

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

document.getElementById('movie-container').appendChild(card);
document.querySelector('#search-button').addEventListener('click', handleSearch);

const card = document.createElement('div');
card.className = 'movie-card';
card.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
  <h3>${movie.title}</h3>
  <p>${movie.overview}</p>
  <span>Rating: ${movie.vote_average}</span>
`;
card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
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