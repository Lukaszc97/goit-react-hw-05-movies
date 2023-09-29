import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../Service/api'; 

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  const searchMoviesData = useCallback(async () => {
    try {
      const movieData = await searchMovies(searchTerm);
      setSearchResults(movieData);
      setLastSearchTerm(searchTerm);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    searchMoviesData();
  }, [searchTerm, searchMoviesData]);


  useEffect(() => {
    setSearchTerm(lastSearchTerm);
  }, [lastSearchTerm]);

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
