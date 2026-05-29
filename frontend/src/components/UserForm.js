import React, { useEffect, useState } from "react";

function UserForm({ addUser, editingUser, updateUser }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: editingUser?.id,
      name,
      email,
    };

    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="add-btn" type="submit">
        {editingUser ? "Modifier" : "Ajouter"}
      </button>

    </form>
  );
}

export default UserForm;