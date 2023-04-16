import React from "react";
import { useParams } from "react-router-dom";
import "./Contact.scss";
import { useNavigate } from "react-router-dom";

function Success() {
  const params = useParams();
  const navigate = useNavigate();
  const { name, email, concern } = params; // Access props from URL parameters
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="success-container">
      <h1>Thank you for your concerns</h1>
      <h2> {name}!</h2>
      <p className="contact-p">Your question/concern</p>
      <div className="concern">{concern}</div>

      <div style={{ paddingTop: "25px" }}>
        <p>Will be answered in 24-48 hours and we will email you @ {email} </p>
      </div>

      <div>Thank you and have a good day!</div>

      <div>
        <button onClick={handleGoHome}>home</button>
      </div>
    </div>
  );
}

export default Success;
