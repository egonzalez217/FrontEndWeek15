import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const User = (props) => {
  const { user, deleteUser } = props;

  const deleteThisUser = (userId) => {
    console.log("user id to delete passed up");
    deleteUser(userId);
  };

  return (
    <Container>
      <h1>
        User: {user.first_name} {user.last_name}
        <br />
      </h1>
      <p>
        Email: {user.email} <br />
        <br />
        <Button variant="danger" onClick={(e) => deleteThisUser(user._id)}>
          Delete
        </Button>
      </p>
    </Container>
  );
};

export default User;
