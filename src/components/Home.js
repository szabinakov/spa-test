import React from "react";
import PropTypes from "prop-types";

import Login from "./Login.js";
import UserList from "./UserList.js";
import "../styles/Home.css";

export default function Home({ userState, setUserState }) {
  const isUserLoggedIn = userState.isUserLoggedIn;

  return (
    <>
      {isUserLoggedIn ? (
        <UserList />
      ) : (
        <Login userState={userState} setUserState={setUserState} />
      )}
    </>
  );
}

Home.propTypes = {
  userState: PropTypes.object,
  setUserState: PropTypes.func,
};
