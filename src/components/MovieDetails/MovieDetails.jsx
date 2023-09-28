import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDatails.module.css';
import PropTypes from 'prop-types';
function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [posterUrl, setPosterUrl] = useState('');

  const fetchMovieDetails = useCallback(async () => {
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
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId, fetchMovieDetails]);

  if (!movieDetails || Object.keys(movieDetails).length === 0) {
    return <div>Film nie istnieje.</div>;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.boxContainer}>
        {posterUrl && <img src={posterUrl} width="150px" alt={`${movieDetails.title} Poster`} className={styles.posterContainer} />}
        <div className={styles.contentContainer}>
          <h2>Movie Details</h2>
          <h3>Title: {movieDetails.title}</h3>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Overview: {movieDetails.overview}</p>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <button onClick={toggleCast}>Toggle Cast</button>
        <button onClick={toggleReviews}>Toggle Reviews</button>
      </div>

      {showCast && <Cast />}
      {showReviews && <Reviews />}
    </div>
  );
}MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired, 
};
export default MovieDetails;
