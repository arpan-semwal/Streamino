import React, { useState } from 'react'
import InputField from '../components/InputFiled';

const Login:React.FC = () => {
	
	const [formData , setFormData] = useState({
		email:"",
		password:"",
	});
	
	
	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]:e.target.value,
		});
	}
	
	
	const handleSubmit = async(e:React.FormEvent) => {
		e.preventDefault();
		
		
		
		
	}
	
	
	
	return(
		<div className='flex items-center justify-center bg-gray-100  px-4 min-h-screen '>
			<div className='w-full max-w-md bg-white rounded-2xl shadow-2xl p-8'>
				<h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Welcome Back</h2>
				
				
				<form onSubmit={handleSubmit} className='space-y-4'>
					<InputField
						type='email'
						placeholder='Email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
					
					
					<InputField
						type='password'
						placeholder="Password"
						name='password'
						value={formData.password}
						onChange={handleChange}
					
					
					
					
					/>
					
					
					<button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition'>
						Login
					</button>
				</form>
				
				
				
				
			</div>
		</div>
	)
}


export default Login;