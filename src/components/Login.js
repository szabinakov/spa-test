import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/Form.css";
import Alert from "./Alert.js";

export default function Login({ setUserState }) {
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
        <h1>Welcome to the App, Please login!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="email"
              className="email"
              name="email"
              placeholder="Enter email!"
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
              placeholder="Enter password!"
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
    </>
  );
}

Login.propTypes = {
  setUserState: PropTypes.func,
};
