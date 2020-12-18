import React from "react";

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
