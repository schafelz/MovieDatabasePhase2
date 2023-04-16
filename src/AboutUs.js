import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.scss";

const AboutUs = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <h1 className="my-5">About Us</h1>
        <p className="lead">
          The Movie Database App is a platform for movie enthusiasts to explore
          and discover their favorite movies. Our app provides information about
          movies including their title, director, genre, and plot. Users can
          also search for movies, view random movies, and take movie quizzes to
          test their movie knowledge.
        </p>
        <p className="lead">
          Our team at Movie Database App is passionate about movies and
          technology. We strive to provide an enjoyable user experience and
          continuously improve our app to meet the needs of movie lovers
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
