import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function UserCard({ id, name, email, avatar, deleteUser }) {
  return (
    <div className="userCardContainer">
      <button onClick={() => deleteUser(id)}>
        <span class="tooltiptext">Delete User</span>
        <FontAwesomeIcon className="iconContainer" icon={faTrash} />
      </button>
      <div className="imgContainer">
        <img src={avatar} alt="face of people" />
      </div>
      <p className="nameContainer">{name}</p>
      <p className="emailContainer">{email}</p>
      <div className="socialDiv">
        <ul className="socialIcons">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="iconContainer" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/?lang=en-gb"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="iconContainer" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="iconContainer" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="iconContainer" icon={faCodepen} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
  deleteUser: PropTypes.func,
};
