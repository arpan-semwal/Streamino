import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Home</Link>
      <Link to="/stream" style={{ color: '#61dafb' }}>Watch Stream</Link>
    </nav>
  );
};

export default Navbar;
