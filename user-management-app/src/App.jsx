import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getUsers, addUser, updateUser, deleteUser } from './services/userService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editableUser, setEditableUser] = useState(null);

  const fetchData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (user) => {
    await addUser(user);
    fetchData();
  };

  const handleUpdate = async (user) => {
    await updateUser(user);
    fetchData();
    setEditableUser(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchData();
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={editableUser ? handleUpdate : handleAdd} user={editableUser} />
      <UserList users={users} onEdit={setEditableUser} onDelete={handleDelete} />
    </div>
  );
};

export default App;
