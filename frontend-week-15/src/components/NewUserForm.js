import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewUserForm = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (first_name && last_name && email) {
      props.addUser({ first_name, last_name, email });

      console.log("add user object passed up");
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <Container className="small-container" id="new-room-form-container">
      <br />
      <h4>Add a new User</h4>
      <br />

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="form">
          <Form.Control
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name:"
          />
          <br />
          <Form.Control
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name:"
          />
          <br />
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email:"
          />
        </Form.Group>

        <Button variant="default" type="submit" id="submit-room">
          Add User
        </Button>
      </Form>
    </Container>
  );
};

export default NewUserForm;
