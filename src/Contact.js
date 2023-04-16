import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted", { name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    navigate(`/Contact/Success/${name}/${email}/${concern}`);
  };

  return (
    <div className="contact-container">
      <h1>Welcome to our Contact page</h1>
      <div>
        <p className="contact-p">
          Please feel free to leave your details and concerns below. We value
          your feedback and will get back to you as soon as possible.
        </p>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            border: "1px solid black",
            backgroundColor: "white"
          }}
        >
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicConcerns">
              <Form.Label>Concerns:</Form.Label>
              <Form.Control
                as="textarea"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
