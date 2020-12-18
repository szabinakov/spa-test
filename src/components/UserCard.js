import React from "react";

export default function UserCard({ name, email, avatar }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <img src={avatar} alt="face of people"></img>
    </div>
  );
}
