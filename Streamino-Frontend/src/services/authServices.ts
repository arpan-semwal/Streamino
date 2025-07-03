import axios from 'axios';

const API = 'http://localhost:5000/api/auth';

export const registerUser = async (userData: {
  fullName: string;
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API}/register`, userData);
  return response.data;
};
