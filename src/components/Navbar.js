import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export default function Navbar({ userState }) {
  const isUserLoggedIn = userState.isUserLoggedIn;

  return (
    <div data-testid="navContainer" className="navContainer">
      {isUserLoggedIn && (
        <ul>
          <li data-testid="homeLink" className="homeLink">
            <Link to="/">
              <FontAwesomeIcon className="iconContainer" icon={faHome} />
            </Link>
          </li>
          <li data-testid="addUserLink" className="addUserLink">
            <Link to="/add-users">
              <FontAwesomeIcon className="iconContainer" icon={faUserPlus} />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

Navbar.propTypes = {
  userState: PropTypes.object,
};
