import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./Contact.scss";

const MovieDatabase = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (movieName !== "") {
      axios
        .get(`https://www.omdbapi.com/?apikey=5bf96c34&t=${movieName}`)
        .then((response) => {
          setMovieData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [movieName]);

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  return (
    <div className="contact-container">
      <div className="container">
        <h1 className="mt-4 mb-4">Movie Database</h1>
        <div className="row">
          <div className="input">
            <input
              type="text"
              value={movieName}
              onChange={handleMovieNameChange}
              placeholder="Enter movie name"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-4">
          {movieData ? (
            <div className="col-md-6">
              <div className="card">
                <img
                  src={movieData.Poster}
                  alt="Movie Poster"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">{movieData.Title}</h2>
                  <p className="card-text">Released: {movieData.Released}</p>
                  <p className="card-text">Director: {movieData.Director}</p>
                  <p className="card-text">Actors: {movieData.Actors}</p>
                  <p className="card-text">Plot: {movieData.Plot}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-6">
              <p className="text-muted">No movie found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDatabase;
