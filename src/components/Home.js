import React from "react";
import PropTypes from "prop-types";

import Login from "./Login.js";
import UserList from "./UserList.js";

export default function Home({ userState, setUserState }) {
  const isUserLoggedIn = userState.isUserLoggedIn;

  let message;
  let content;

  if (isUserLoggedIn) {
    message = <h1>Welcome Back!</h1>;
    content = (
      <>
        <UserList />
      </>
    );
  } else {
    message = <h1>Welcome to the App, please login!</h1>;
    content = (
      <>
        <Login userState={userState} setUserState={setUserState} />
      </>
    );
  }
  return (
    <div>
      {message}
      {content}
    </div>
  );
}

Home.propTypes = {
  userState: PropTypes.object,
  setUserState: PropTypes.func,
};
