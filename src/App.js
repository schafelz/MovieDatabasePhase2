import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import MyNavbar from "./NarBar";
import MoviePlot from "./MoiveQuiz";
import Contact from "./Contact";
import Success from "./Success";
import MovieDatabase from "./MoiveDatabase";
import AboutUs from "./AboutUs";
import Home from "./Home";
import RandomMovie from "./RandomMovie";

export default function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDatabase" element={<MovieDatabase />} />
        <Route path="/RandomMovie" element={<RandomMovie />} />
        <Route path="/MoviePlot" element={<MoviePlot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Contact/Success/:name/:email/:concern"
          element={<Success />}
        />
      </Routes>
    </div>
  );
}
