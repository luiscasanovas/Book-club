// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Club</h1>
      <img src="/logo.png" alt="Book Club Logo" style={{ width: '150px', height: '150px' }} />
      <p>Please log in to access the dashboard and participate in the book club activities.</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default Home;
