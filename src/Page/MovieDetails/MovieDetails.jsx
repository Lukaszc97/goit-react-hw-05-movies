import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MovieDetails.module.css';
import PropTypes from 'prop-types';
import { fetchMovieDetails } from '../../Service/api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [posterUrl, setPosterUrl] = useState('');
  const navigate = useNavigate(); 
  const location = useLocation();


  const searchQuery = new URLSearchParams(location.search).get('query');

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const fetchMovieDetailsData = useCallback(async () => {
    try {
      const data = await fetchMovieDetails(movieId);
      setMovieDetails(data);

      if (data.poster_path) {
        setPosterUrl(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
      }
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetailsData();
  }, [movieId, fetchMovieDetailsData]);

  const goBack = () => {

    sessionStorage.setItem('lastSearchQuery', searchQuery);


    navigate(-1);
  };

  if (!movieDetails || Object.keys(movieDetails).length === 0) {
    return <div>Film nie istnieje.</div>;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      <button style={{ width: '50px' }} onClick={goBack} >BACK</button>

      <div className={styles.boxContainer}>
        {posterUrl && (
          <img
            src={posterUrl}
            width="150px"
            alt={`${movieDetails.title} Poster`}
            className={styles.posterContainer}
          />
        )}
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
}

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;