import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export const MovieCard = ({ movie, user, updateUser }) => {
  console.log(movie, user);
  const token = localStorage.getItem('token');

  //Add Favorite Movie
  const addFavoriteMovie = (id) => {
    fetch(
      `https://myflixmovieapp.onrender.com/users/${user.username}/favorites/${id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed to add');
        }
      })
      .then((user) => {
        if (user) {
          updateUser(user);
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  //Remove Favorite Movie
  const removeFavoriteMovie = (id) => {
    fetch(
      `https://myflixmovieapp.onrender.com/users/${user.username}/favorites/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed to remove');
        }
      })
      .then((user) => {
        if (user) {
          updateUser(user);
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
        maxWidth: '200px',
      }}
    >
      <Link
        to={`/movies/${movie._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h3>{movie.title}</h3>
        <img
          // Update image source to dynamically fetch the image from the server
          src={movie.imageURL} // Assuming 'imageId' is stored in movie object
          alt={movie.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <div>
        {user.favorites.includes(movie._id) ? (
          <Button
            className="fav-button"
            on
            onClick={() => removeFavoriteMovie(movie._id)}
          >
            <FaHeart />
          </Button>
        ) : (
          <Button
            className="fav-button"
            onClick={() => addFavoriteMovie(movie._id)}
          >
            <FaRegHeart />
          </Button>
        )}
      </div>
    </div>
  );
};
