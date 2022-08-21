import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateUserForm = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (first_name && last_name && email) {
      console.log("triggered updateUser: ", {
        first_name,
        last_name,
        email,
      });
      props.updateUser({ first_name, last_name, email });

      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      console.log("invalid input");
      alert("First Name, Last Name, and Email are required to update!");
    }
  };

  return (
    <Container className="small-container" id="update-user-form-container">
      <br />

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="form">
          <Form.Control
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name:"
          />
          <Form.Text className="text-muted">Required!</Form.Text>
          <br />
          <br />
          <Form.Control
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name:"
          />
          <Form.Text className="text-muted">Required!</Form.Text>
          <br />

          <br />
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email:"
          />
          <Form.Text className="text-muted">Required!</Form.Text>
          <br />
        </Form.Group>

        <Button variant="default" type="submit" id="submit-user">
          Update User
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateUserForm;
