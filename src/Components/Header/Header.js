import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container border border-primary d-lg-flex justify-content-between   align-items-center">
      <div>
        <h3 className="pt-2">Quiz Time</h3>
      </div>
      <div className="d-flex w-full justify-content-center">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/topics" className="nav-link">
          Topics
        </Link>
        <Link to="/statistics" className="nav-link">
          Statistics
        </Link>
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
