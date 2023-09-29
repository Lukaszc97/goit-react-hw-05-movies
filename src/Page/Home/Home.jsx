import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../Service/api'; 

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTrendingMovies(); 
        setTrendingMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
