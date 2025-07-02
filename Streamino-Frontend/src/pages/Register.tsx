import React from 'react'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className=" ">
      {/* Card */}
      <div className=" ">
        <h2 className=" ">
          Create an Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className= ""
          />
          <input
            type="text"
            placeholder="Username"
            className=" "
          />
          <input
            type="email"
            placeholder="Email"
            className=" "
          />
          <input
            type="password"
            placeholder="Password"
            className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
