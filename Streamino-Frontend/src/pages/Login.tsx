import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputFiled';
import { loginUser } from '../services/authServices';
import type { LoginForm } from '../types/User';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await loginUser(formData);

    if (res.user) {
      localStorage.setItem('user', JSON.stringify(res.user));
      alert('Login successful!');
      navigate("/dashboard");
     
    } else {
      alert('Login failed: No user returned');
    }

  } catch (error: any) {
    console.error('❌ Login failed:', error.response?.data || error.message);
    alert('Login failed!');
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
