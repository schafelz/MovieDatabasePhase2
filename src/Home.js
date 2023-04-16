import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

const Home = () => {
  return (
    <div className="contact-container">
      <h1>Movie Database App</h1>
      <p>
        Welcome to the MovieDatabase App. You can search for a movie in our
        search engine or pick a random movie. We also offer fun quizzes that can
        test your movie knowledge. If you are facing any technical issues with
        our website. Visit our <Link to="/contact">Contact</Link> page to state
        your concern.
      </p>
    </div>
  );
};

export default Home;
