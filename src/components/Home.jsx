import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <header className="mb-5">
        <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Book Club Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        <h1 className="mt-3">Welcome to the Book Club</h1>
      </header>
      <p>Join us in exploring new books every month!</p>
      <Link to="/login" className="btn btn-custom mt-4">Login</Link>
    </div>
  );
};

export default Home;
