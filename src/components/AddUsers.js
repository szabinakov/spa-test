import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert.js";
import "../styles/Form.css";

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
        setAlert({
          message: "User has been added successfully",
          isSuccess: true,
        });
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
    <>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="formContainer">
        <h2>Please fill out the details of the user you would like to add!</h2>
        <form className="form" onSubmit={handleAddUser}>
          <div>
            <input
              type="text"
              className="firstname"
              name="firstname"
              onChange={handleFieldChange}
              placeholder="First name!"
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="lastname"
              name="lastname"
              onChange={handleFieldChange}
              placeholder="Last name!"
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="job"
              name="job"
              onChange={handleFieldChange}
              placeholder="Job title!"
            />
          </div>
          <div>
            <input
              type="text"
              className="email"
              name="email"
              onChange={handleFieldChange}
              placeholder="Email address!"
              required
            />
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </>
  );
}
