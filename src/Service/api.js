
const API_KEY = '6259da9bc5df5d51756d5e5542429946';
export async function fetchMovieCast(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.cast;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }

  export async function fetchTrendingMovies() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }


  
  export const fetchMovies = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export const searchMovies = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchMovieReviews = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };
  export const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };