// TMDB の APIKEY を入れる
const API_KEY = "a966d2105181cfcf58c9068b3e55799e"

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    feachHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}