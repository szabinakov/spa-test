import React, { useState } from "react";
import axios from "axios";

export default function AddUsers() {
  const initialState = {
    fields: {
      firstname: "",
      lastname: "",
      job: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const handleAddUser = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", fields)
      .then((response) => console.log("User Added " + response))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          className="firstname"
          name="firstname"
          onChange={handleFieldChange}
          required
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="lastname"
          name="lastname"
          onChange={handleFieldChange}
          required
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="job"
          name="job"
          onChange={handleFieldChange}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          className="email"
          name="email"
          onChange={handleFieldChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
