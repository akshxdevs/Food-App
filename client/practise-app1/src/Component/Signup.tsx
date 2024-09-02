import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error(`Failed to signup: ${response.statusText}`);
      }
      console.log('User signed up successfully');
      navigate('/login',)
    } catch (error) {
      console.error('Signup error:', error);
      // Show error message
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <h2 className='signup-header'>Signup</h2>
        <input className='username-s' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input className='pwd-s' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button className='signup-btn' onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

