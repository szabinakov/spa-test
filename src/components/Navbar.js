import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ userState }) {
  const isUserLoggedIn = userState.isUserLoggedIn;

  return (
    <div>
      <div>LOGO</div>
      {isUserLoggedIn && (
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/add-users">
            <li>Add Users</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
