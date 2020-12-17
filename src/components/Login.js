import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login({ userState, setUserState }) {
  const [value, setValue] = useState();

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
        username: value.username,
        password: value.password,
      })
      .then((response) => {
        setUserState({
          email: value.email,
          isUserLoggedIn: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
      <Link to="/register">Not a member? Register here!</Link>
    </form>
  );
}
