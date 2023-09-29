import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './Header/Header'; 
import Home from '../Page/Home/Home';

const Movies = React.lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = React.lazy(() => import('../Page/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <Router>
      <Header /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
