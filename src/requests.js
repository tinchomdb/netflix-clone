const API_KEY = "be1fa121d423172f18c8cbb8ce63efbd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
};

export default requests;
