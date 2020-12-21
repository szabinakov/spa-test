import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard.js";
import Alert from "./Alert.js";
import "../styles/UserList.css";

export default function UserList() {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [alert, setAlert] = useState(initialState.alert);
  const [usersForActionList, setUsersForActionList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsersForActionList(response.data.data))
      .catch(() => {
        setAlert({
          message: "Something went wrong! Can not load users!",
          isSuccess: false,
        });
      });
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsersForActionList(
          usersForActionList.filter((user) => user.id !== id)
        );
      })
      .then(() => {
        setAlert({
          message: "User has been successfully removed!",
          isSuccess: true,
        });
      })
      .then(setTimeout(() => setAlert({ message: "", isSuccess: false }), 2000))
      .catch(() => {
        setAlert({
          message: "Can not remove user! Please try again!",
          isSuccess: false,
        });
      });
  };
  return (
    <>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div data-testid="userListContainer" className="userListContainer">
        {usersForActionList.map((user) => (
          <UserCard
            key={user.id}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
            avatar={user.avatar}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </>
  );
}
