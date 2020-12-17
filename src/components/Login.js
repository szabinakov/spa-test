import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

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
