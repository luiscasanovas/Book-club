import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import membersData from '../members.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const commonPassword = 'your-secure-password'; // Replace this with the actual password

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

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

    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userRole', member.role);
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Book Club Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        <h1 className="mt-3">Login</h1>
      </header>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-custom btn-block">Login</button>
      </form>
    </div>
  );
};

export default Login;
