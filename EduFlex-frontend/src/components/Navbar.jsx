import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    navigate(`/`); // Navigate to the home page after logout
  };

  const loginRegLink = (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav nav-tabs">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">User</Link>
      </li>
      <li className="nav-item">
        <Link to="/uploads" className="nav-link">Assignment Submission</Link>
      </li>
      <li className="nav-item">
        <Link to="/assignments" className="nav-link">Assignment List</Link>
      </li>
      <li className="nav-item">
        <a href="/" onClick={logOut} className="nav-link">Logout</a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <strong>EduFlex</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
