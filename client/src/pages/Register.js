import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history('/login')
		}
	}

	return (
		<div className="register-section">
		
			<form onSubmit={registerUser}>
			<h1>Patiently Register</h1>
			<label for="name">Name</label> <br /> 
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter Name"
					id="name"
				/>
				<br />
				<label for="email">Email</label> <br /> 
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter Email"
					id ="email"
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
				<input type="submit" value="Register" id="submit"/>
		
			</form>
		</div>
	)
}

export default Register