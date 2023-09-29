import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../Service/api'; 

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const getMovieReviews = useCallback(async () => {
    try {
      const reviewData = await fetchMovieReviews(movieId);
      setReviews(reviewData);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    getMovieReviews();
  }, [getMovieReviews]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;

