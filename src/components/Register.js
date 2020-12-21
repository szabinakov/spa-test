import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/Form.css";
import Alert from "./Alert.js";

export default function Register({ setUserState }) {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [alert, setAlert] = useState(initialState.alert);
  const [value, setValue] = useState();
  const history = useHistory();

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.password === value.confirmPassword) {
      console.log("Password Matches");
      axios
        .post("https://reqres.in/api/register", {
          email: value.email,
          password: value.password,
        })
        .then((response) => {
          setUserState({
            isUserLoggedIn: true,
          });
          history.push("/");
        })
        .catch(() => {
          setAlert({
            message: "Registration failed, please try again!",
            isSuccess: false,
          });
        });
    }
  };
  return (
    <>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="formContainer">
        <h1>Please fill out the details below!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="email"
              className="email"
              name="email"
              placeholder="Enter your email address!"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="password"
              name="password"
              placeholder="Enter your chosen password!"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              className="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password!"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          <div>
            <Link to="/">
              <p>Already member? Login here!</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

Register.propTypes = {
  setUserState: PropTypes.func,
};
