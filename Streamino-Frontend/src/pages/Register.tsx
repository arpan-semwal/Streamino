import React from 'react'
import { Link } from 'react-router-dom';

const Register:React.FC = () => {
	return(
		<div>
			<form action="">
				<input type="text" placeholder='Full Name' />
				
				<input type='text' placeholder='Username'/>
				
				<input type='text' placeholder='Email'/>
				
				
				<input type='text' placeholder='Password'/>
				
				<input type='text' placeholder='Confirm Password'/>
				
				<button type='submit'>
					Register
				</button>
				 
			</form>
			
			
			<p>Already have an account?
				<Link to="/login">
					Login
				</Link>
			</p>
		</div>
	)
}


export default Register;