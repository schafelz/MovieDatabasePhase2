import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import "./Contact.scss";
import Card from "react-bootstrap";
const apiKey = "5bf96c34";

const RandomMovie = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const handleClick = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=random`)
      .then((response) => {
        const randomIndex = Math.floor(
          Math.random() * response.data.Search.length
        );
        const randomMovieID = response.data.Search[randomIndex].imdbID;
        return axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${randomMovieID}`
        );
      })
      .then((response) => {
        setRandomMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 mt-5">
            <h1 className="text-center mb-4">Random Movie Page</h1>
            <p className="text-center">
              Have you ever been overwhelmed with all of the movies you can
              watch. Click the button for a quick movie recommendation.
            </p>
            <button
              className="btn btn-primary d-block mx-auto mb-4"
              onClick={handleClick}
            >
              Get Random Movie
            </button>
            {randomMovie && (
              <div className="card">
                <img
                  className="card-img-top"
                  src={randomMovie.Poster}
                  alt={randomMovie.Title}
                />
                <div className="card-body">
                  <h2 className="card-title">{randomMovie.Title}</h2>
                  <p className="card-text">Released: {randomMovie.Released}</p>
                  <p className="card-text">Director: {randomMovie.Director}</p>
                  <p className="card-text">Actors: {randomMovie.Actors}</p>
                  <p className="card-text">Plot: {randomMovie.Plot}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomMovie;
