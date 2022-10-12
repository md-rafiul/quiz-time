import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container border border-primary d-lg-flex justify-content-between   align-items-center">
      <div>
        <h3 className="pt-2">Quiz Time</h3>
      </div>
      <div className="d-flex w-full justify-content-center">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/topics"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Topics
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Statistics
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
