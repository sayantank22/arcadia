import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Page not found</h1>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
