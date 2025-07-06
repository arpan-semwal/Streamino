import axios from 'axios';
import { type LoginForm } from '../types/User';

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

export const loginUser = async (formData: LoginForm) => {
  const response = await axios.post(`${API}/login`, formData);
  return response.data;
};
