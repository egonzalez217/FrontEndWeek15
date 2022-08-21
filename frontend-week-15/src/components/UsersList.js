import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import User from "./User";
import { usersApi } from "../rest/UsersApi.js";
import NewUserForm from "./NewUserForm";
import UpdateUserForm from "./UpdateUserForm";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isRendered, setIsRendered] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);

  //run in useEffect  to populate new api to avoid empty array - map error
  const addUser = async (user) => {
    console.log("add user received:", user);
    const addUser = await usersApi.post(user);

    const newUsers = users.concat(addUser);
    console.log(newUsers);

    setUsers(newUsers);

    if (create === true) {
      setCreate(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const getUsers = await usersApi.get();

      console.log(getUsers);

      setUsers(getUsers);
      setIsRendered(true);
    };

    if (isRendered === false) {
      fetchUsers();
      console.log("is rendered", isRendered);
    }
    console.log(users);
  }, []);

  const deleteUser = async (deletedUserId) => {
    await usersApi.delete(deletedUserId);

    const getUsers = await usersApi.get();
    setUsers(getUsers);
  };

  const updateUser = async (updatedUser) => {
    console.log("UsersList - updateUser - triggered: ", updatedUser);

    const obj = users.find(
      (user) => user.first_name === updatedUser.first_name
    );
    const objId = obj._id;

    await usersApi.delete(objId);

    const updateUser = await usersApi.post(updatedUser);

    console.log("updateUser", updateUser);
    const getUsers = await usersApi.get();
    setUsers(getUsers);

    console.log(users);
    console.log(getUsers);

    if (edit === true) {
      setEdit(false);
    }
  };

  const usersList = users.map((user, index) => {
    return (
      <div key={index}>
        <User user={user} key={user.id} deleteUser={deleteUser}></User>
      </div>
    );
  });

  return (
    <Container>
      <div>{usersList}</div>
      <Button variant="success" onClick={(e) => setCreate(!create)}>
        Create User
      </Button>
      <Button variant="primary" onClick={(e) => setEdit(!edit)}>
        Edit User
      </Button>
      {edit ? <UpdateUserForm updateUser={updateUser}></UpdateUserForm> : <></>}
      {create ? <NewUserForm addUser={addUser}></NewUserForm> : <></>}
    </Container>
  );
};

export default UsersList;
