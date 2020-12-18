import React from "react";
import Login from "./Login.js";

export default function Home({ userState, setUserState }) {
  const isUserLoggedIn = userState.isUserLoggedIn;

  let message;
  let loginform;

  if (isUserLoggedIn) {
    message = <h1>Welcome Back!</h1>;
  } else {
    message = <h1>Welcome to the App, please login!</h1>;
    loginform = (
      <>
        <Login userState={userState} setUserState={setUserState} />
      </>
    );
  }
  return (
    <div>
      {message}
      {loginform}
    </div>
  );
}
