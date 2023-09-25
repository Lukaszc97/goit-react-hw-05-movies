import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews();
  }, [movieId]);

  const fetchMovieReviews = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6259da9bc5df5d51756d5e5542429946`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Received reviews data:', data); //
      setReviews(data.results);
    } catch (error) {
      console.error(error);
    }
  };

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

export default Reviews;
