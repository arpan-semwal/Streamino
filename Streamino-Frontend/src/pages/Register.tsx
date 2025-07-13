// React and hooks import
import React, { useState } from 'react';
// Link is used for navigating to login after registration
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom';
// Reusable input component for DRY code
import InputField from '../components/InputFiled';
// Function to make API call to register user
import { registerUser } from '../services/authServices';
// TypeScript type for form structure
import type { RegisterForm } from '../types/User'; 

const Register: React.FC = () => {
  // Local state to store form data using useState hook
  const [formData, setFormData] = useState<RegisterForm>({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate();

  /**
   * 🔁 handleChange
   * Called when any input field changes.
   * - Uses event delegation (`e.target.name`) to update specific field in `formData`.
   * - React.ChangeEvent<HTMLInputElement> is a TS type for input events.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // dynamic key update
    });
  };

  /**
   * 📨 handleSubmit
   * Called when the user clicks "Register"
   * - Prevents form reload
   * - Validates password match
   * - Calls `registerUser` API and handles success or error
   */
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const res = await registerUser(formData);
    

    console.log('✅ Registered:', res);
    
    // Save user to localStorage
    if (res.user) {
      localStorage.setItem('user', JSON.stringify(res.user));
      alert('Registered successfully!');
      navigate("/stream/create");
      
    } else {
      alert('Something went wrong: user not returned from API');
    }

  } catch (error: any) {
    console.error('❌ Error registering:', error.response?.data || error.message);
    alert('Registration failed');
  }
};

  // 🧱 UI JSX for register form inside a responsive card
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* 📋 Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
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
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        {/* Link to login page */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
