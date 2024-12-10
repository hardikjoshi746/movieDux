import React from "react";

import "../styles.css";

export default function MovieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "images/default.png";
  };

  const ratingColor = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating > 5 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-genre ${ratingColor(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
