import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserCard({ id, name, email, avatar, deleteUser }) {
  return (
    <div className="userCardContainer">
      <div className="imgContainer">
        <img src={avatar} alt="face of people" />
      </div>
      <p className="nameContainer">{name}</p>
      <p className="emailContainer">{email}</p>
      <div className="socialContainer">
        <button onClick={() => deleteUser(id)}>
          <span class="tooltiptext">Delete User</span>
          <FontAwesomeIcon className="iconContainer" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  emai: PropTypes.string,
  avatar: PropTypes.string,
  deleteUser: PropTypes.func,
};
