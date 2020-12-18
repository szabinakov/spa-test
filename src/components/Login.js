import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/Login.css";

export default function Login({ userState, setUserState }) {
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
    axios
      .post("https://reqres.in/api/login", {
        email: value.email,
        password: value.password,
      })
      .then((response) => {
        setUserState({
          isUserLoggedIn: true,
        });
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginFormContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className="email"
            name="email"
            placeholder="Your email address!"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="password"
            name="password"
            placeholder="Your password!"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <Link to="/register">
            <p>Not a member? Register here!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  userState: PropTypes.object,
  setUserState: PropTypes.func,
};
