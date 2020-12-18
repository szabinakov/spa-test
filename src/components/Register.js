import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/Register.css";
import Alert from "./Alert.js";

export default function Register({ userState, setUserState }) {
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
    <div className="registerFormContainer">
      <Alert message={alert.message} success={alert.isSuccess} />
      <h3>Please fill out the details below!</h3>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="email"
            name="email"
            placeholder="Please enter your email address!"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            name="password"
            placeholder="Please enter your chosen password!"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="confirmPassword"
            name="confirmPassword"
            placeholder="Please confirm your password!"
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
  );
}

Register.propTypes = {
  userState: PropTypes.object,
  setUserState: PropTypes.func,
};
