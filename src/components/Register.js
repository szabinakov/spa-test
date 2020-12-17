import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register({ userState, setUserState }) {
  const [value, setValue] = useState();

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
            email: value.email,
            isUserLoggedIn: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <button type="submit">Register</button>
      <Link to="/">Already member? Login here!</Link>
    </form>
  );
}
