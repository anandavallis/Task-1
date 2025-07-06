import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("All fields are required!");
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">{user ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
