import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../Service/api';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMoviesData = useCallback(async (term) => {
    try {
      if (term) {
        const movieData = await searchMovies(term);
        setSearchResults(movieData);
      } else {
       
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get('query');

    if (query) {
      setSearchTerm(query);
      searchMoviesData(query);
    }
  }, [searchParams, searchMoviesData]);

  useEffect(() => {

    searchMoviesData(searchTerm);
  }, [searchMoviesData, searchTerm]);

  const handleSearchClick = () => {
    const params = new URLSearchParams();
    params.set('query', searchTerm);
    setSearchParams(params);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick(); 
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
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
