import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../Service/api';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMoviesData = useCallback(async () => {
    try {
      const movieData = await searchMovies(searchTerm);
      setSearchResults(movieData);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get('query');

    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const handleSearchClick = () => {
    const params = new URLSearchParams();
    params.set('query', searchTerm);
    setSearchParams(params);
    searchMoviesData();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMoviesData();
    }
  };
  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick}>Search</button>
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
