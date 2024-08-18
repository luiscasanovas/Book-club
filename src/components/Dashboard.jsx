// src/components/Dashboard.jsx
import React from 'react';
import BookList from './BookList';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Previous Books We've Read</h1>
      <BookList />
    </div>
  );
};

export default Dashboard;
