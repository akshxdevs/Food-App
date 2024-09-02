import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error(`Failed to login: ${response.statusText}`);
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
      console.log('User logged in successfully');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      alert("Failed to login check your credentials!!");
    }
  };

  return (
    <div className='login-container'>
      <div className="login-card">
        <h2 className='login-header'>Login</h2>
        <input className='username' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input className='pwd' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button className='login-button' onClick={handleLogin}>Login</button>
        <p>Don't have an account?</p><br /><Link className='signup-link' to='/signup'>Signup</Link>
      </div>
    </div>
  );
};
