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
    <div className="flex items-center justify-end min-h-screen bg-gray-100 px-4 bg-no-repeat bg-cover bg-center w-full sm:px-8 md:px-8" style={{backgroundImage: "url(/streamer.gif)"}}>
      <div className="	bg-[#1e1e2e] w-full max-w-md bg-opacity-10 backdrop-blur-sm  border-white border-opacity-40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
        <h2 className="text-2xl font-bold text-center text-[#e0d7ff] mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete='off'>
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
            className="w-full bg-gradient-to-r orange-400 from-pink-500  hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
