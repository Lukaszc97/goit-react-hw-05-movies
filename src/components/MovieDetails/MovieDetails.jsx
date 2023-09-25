import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [posterUrl, setPosterUrl] = useState('');

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6259da9bc5df5d51756d5e5542429946`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovieDetails(data);

      if (data.poster_path) {
        setPosterUrl(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div>
      <h2>Movie Details</h2>
      {posterUrl && <img src={posterUrl} width="150px" alt={`${movieDetails.title} Poster`} />}
      <h3>Title: {movieDetails.title}</h3>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>

      

      <button onClick={toggleCast}>Toggle Cast</button>
      <button onClick={toggleReviews}>Toggle Reviews</button>

      {showCast && <Cast />}
      {showReviews && <Reviews />}
    </div>
  );
}

export default MovieDetails;
