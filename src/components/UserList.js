import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard.js";

export default function UserList() {
  const [usersForActionList, setUsersForActionList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => setUsersForActionList(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {usersForActionList.map((user) => (
        <UserCard
          key={user.id}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}
