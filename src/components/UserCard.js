import React from "react";
import PropTypes from "prop-types";

export default function UserCard({ id, name, email, avatar, deleteUser }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <img src={avatar} alt="face of people"></img>
      <button onClick={() => deleteUser(id)}>Delete</button>
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
