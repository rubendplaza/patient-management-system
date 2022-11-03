import { useState } from 'react'
import './login.css'


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className="login-section">
		
			<form onSubmit={loginUser}>
                <h1>Patiently Login</h1> 
               
                <label for="email">Email</label> <br /> 
				<input
               
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter Email"
                    id="email"
                 
				/>
				<br />
  
             
                
                <label for="password">Password</label> <br /> 
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter Password"
                    id="password"
				/>
				<br />
                <br /> 
				<input type="submit" value="Login" id="submit" />
                <a href="./register">or Register</a>
			</form>
		</div>
	)
}

export default Login