import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: 'white',
    color: 'black',
    borderBottom: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navbarBrand: {
    color: '#0044cc', // Blue color for brand
    fontWeight: 'bold',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
  },
  btn: {
    borderColor: '#0044cc', // Blue color
    color: '#0044cc',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginLeft: '20px',
  },
  btnHover: {
    backgroundColor: '#0044cc', // Blue color on hover
    color: 'white',
  },
  logoutBtn: {
    borderColor: '#dc3545', // Red color for logout
    color: 'white',
    backgroundColor: '#dc3545', // Red color for logout
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginLeft: '300px',
  },
  logoutBtnHover: {
    backgroundColor: '#c82333', // Darker red on hover
    color: 'white',
  },
  navItem: {
    marginLeft: '10px',
  }
};

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    navigate(`/`); // Navigate to the home page after logout
  };

  const handleMouseOver = (e, isLogout = false) => {
    if (isLogout) {
      e.currentTarget.style.backgroundColor = styles.logoutBtnHover.backgroundColor;
      e.currentTarget.style.color = styles.logoutBtnHover.color;
    } else {
      e.currentTarget.style.backgroundColor = styles.btnHover.backgroundColor;
      e.currentTarget.style.color = styles.btnHover.color;
    }
  };

  const handleMouseOut = (e, isLogout = false) => {
    if (isLogout) {
      e.currentTarget.style.backgroundColor = styles.logoutBtn.backgroundColor;
      e.currentTarget.style.color = styles.logoutBtn.color;
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = styles.btn.color;
    }
  };

  const loginRegLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/login"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Login
        </Link>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/register"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Register
        </Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/profile"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/assignments"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Assignment List
        </Link>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/uploads"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Assignment Submission
        </Link>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <Link
          to="/events"
          className="nav-link"
          style={styles.btn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Events
        </Link>
      </li>
      <li className="nav-item" style={{ ...styles.navItem, marginLeft: 'auto' }}>
        <a
          href="/"
          onClick={logOut}
          className="nav-link"
          style={styles.logoutBtn}
          onMouseOver={(e) => handleMouseOver(e, true)}
          onMouseOut={(e) => handleMouseOut(e, true)}
        >
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={styles.navbarBrand}>
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
            <li className="nav-item" style={styles.navItem}>
              <Link
                to="/"
                className="nav-link"
                style={styles.btn}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
