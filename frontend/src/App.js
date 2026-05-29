import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./styles.css";

function App() {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
  const response = await axios.get(
    "https://user-crud-production-7769.up.railway.app/users"
  );

  setUsers(response.data);
};

useEffect(() => {
  fetchUsers();
}, []);

const addUser = async (user) => {

  await axios.post(
    "https://user-crud-production-7769.up.railway.app/users",
    user
  );

  fetchUsers();
};

  const deleteUser = async (id) => {
    await axios.delete(`https://user-crud-production-7769.up.railway.app/users/${id}`);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = async (user) => {
    const response = await axios.put(
      `https://user-crud-production-7769.up.railway.app/users/${user.id}`,
      user
    );

    setUsers(
      users.map(u => (u.id === user.id ? response.data : u))
    );

    setEditingUser(null);
  };

  return (
    <div className="container">
      <h1>Gestion des utilisateurs</h1>

      <UserForm
        addUser={addUser}
        editingUser={editingUser}
        updateUser={updateUser}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditingUser={setEditingUser}
      />
    </div>
  );
}

export default App;