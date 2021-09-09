import React, { useState, useEffect } from "react";
import UserS from "./UserS";
import { fetchUsers } from "./api";

export default function UsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users);
    });
  }, []);

  return <UserS users={users} />;
}