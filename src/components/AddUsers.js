import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert.js";

export default function AddUsers() {
  const initialState = {
    fields: {
      firstname: "",
      lastname: "",
      job: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const handleAddUser = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("https://reqres.in/api/users", fields)
      .then(() => {
        setAlert({ message: "User Added Successfully", isSuccess: true });
      })
      .then(setTimeout(() => setAlert({ message: "", isSuccess: false }), 2000))
      .catch(() => {
        setAlert({
          message: "Something went wrong! Please try again!",
          isSuccess: false,
        });
      });
  };
  return (
    <div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddUser}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          className="firstname"
          name="firstname"
          onChange={handleFieldChange}
          required
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="lastname"
          name="lastname"
          onChange={handleFieldChange}
          required
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="job"
          name="job"
          onChange={handleFieldChange}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          className="email"
          name="email"
          onChange={handleFieldChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
