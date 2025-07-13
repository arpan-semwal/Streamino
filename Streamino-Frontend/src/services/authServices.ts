// src/services/authServices.ts
import { type LoginForm } from '../types/User';
import API from '../utils/api';

export const registerUser = async (userData: {
  fullName: string;
  username: string;
  email: string;
  password: string;
}) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (formData: LoginForm) => {
  const response = await API.post('/auth/login', formData);
  return response.data;
};
