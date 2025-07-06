import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => (
  <li>
    {user.name} - {user.email}
    <button onClick={() => onEdit(user)}>✏</button>
    <button onClick={() => onDelete(user.id)}>❌</button>
  </li>
);

export default UserItem;
