import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import membersData from '../members.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const commonPassword = 'Soyelmejor'; 

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const member = membersData.members.find(member => member.email === email);

    if (!member) {
      setError('Email not found in the members list.');
      return;
    }

    if (password !== commonPassword) {
      setError('Incorrect password.');
      return;
    }

    if (member.role !== 'admin' && member.role !== 'member') {
      setError('You do not have the correct role to log in.');
      return;
    }

    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userRole', member.role);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
