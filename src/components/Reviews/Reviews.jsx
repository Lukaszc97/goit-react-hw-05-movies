import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchMovieReviews = useCallback(async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6259da9bc5df5d51756d5e5542429946`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setReviews(data.results);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieReviews();
  }, [fetchMovieReviews]);

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
