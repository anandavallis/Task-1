import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addUser = async (user) => {
  await axios.post(API_URL, user);
};

export const updateUser = async (user) => {
  await axios.put(`${API_URL}/${user.id}`, user);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
