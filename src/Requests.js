const API_KEY = 'f4872214e631fc876cb43e6e30b7e731';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movies/top_rated?api_key${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
  fetchRomanceyMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
};

export default requests;
