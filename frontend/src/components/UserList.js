import React from "react";

function UserList({ users, deleteUser, setEditingUser }) {

  return (
    <div>

      {users.map(user => (

        <div className="user-card" key={user.id}>

          <div className="user-info">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </div>

          <div className="actions">

            <button
              className="edit-btn"
              onClick={() => setEditingUser(user)}
            >
              Modifier
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              Supprimer
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default UserList;