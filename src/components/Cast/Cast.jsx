import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../Service/api'; 

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
