import React from 'react';
import { FaHome, FaSearch, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Spotify</h2>
      <nav>
        <a href="#"><FaHome /> Home</a>
        <a href="#"><FaSearch /> Search</a>
        <a href="#"><FaMusic /> Library</a>
      </nav>
    </div>
  );
};

export default Sidebar;
