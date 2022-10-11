import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container">
      <div>
        <h3>Quiz Time</h3>
      </div>
      <div>
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/practice" className="nav-link">
          Practice
        </Link>
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
