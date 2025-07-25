import React, { useEffect, useState } from 'react';
import './App.css';
import {Nodes,Node} from 

function MovieCard({ movie, onRatingChange }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card movie-card">
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <div className="mb-2">
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            className="form-control"
            placeholder="Add rating"
            value={movie.rating || ''}
            onChange={(e) => onRatingChange(movie.id, e.target.value)}
          />
        </div>
        <p className="card-text">
          {movie.rating ? `Rating: ${movie.rating}/10` : 'No rating yet'}
        </p>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
        {readMore && (
          <p className="mt-2 card-text">
            {movie.description}
          </p>
        )}
      </div>
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'KGF - 2',
      rating: '',
      description: 'The sequel to KGF, featuring Rocky’s quest for power and revenge.',
      image: 'kgf.jpg',
    },
    {
      id: 2,
      title: 'Theri',
      rating: '',
      description: 'A Tamil action thriller about a cop protecting his daughter.',
      image: 'threri.jpeg',
    },
    {
      id: 3,
      title: 'Tourist Family',
      rating: '',
      description: 'A family trip turns into an unexpected adventure.',
      image: 'tourist.jpeg',
    },
    {
      id: 4,
      title: 'Bahubali',
      rating: '',
      description: 'An epic tale of love, war, and kingdom battles.',
      image: 'bahubali.jpeg',
    },
  ]);

  useEffect(() => {
    document.title = '🕷️ Movie Card Gallery';
  }, []);

  const handleRatingChange = (id, newRating) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, rating: newRating } : movie
      )
    );
  };

  const addMovie = () => {
    const newId = movies.length + 1;
    setMovies([
      ...movies,
      {
        id: newId,
        title: `New Movie ${newId}`,
        rating: '',
        description: 'This is a new movie card. Add a rating!',
        image: '/images/placeholder.jpg',
      },
    ]);
  };

  const deleteMovie = () => {
    if (movies.length > 0) {
      setMovies(movies.slice(0, movies.length - 1));
    }
  };

  return (
    <div className="container-fluid movie-gallery">
      <h1 className="text-center mb-4">🕷️ Movie Card Gallery</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-success m-2" onClick={addMovie}>
          Add Card
        </button>
        <button className="btn btn-danger m-2" onClick={deleteMovie}>
          Delete Card
        </button>
      </div>
    </div>
  );
}

export default App;

