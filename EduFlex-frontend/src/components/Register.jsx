import React, { useState } from 'react';
import { register } from './UserFunctions';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    marginTop: '5rem',
  },
  formContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    textAlign: 'center',
    color: '#0044cc',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderRadius: '0.3rem',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.3rem',
    backgroundColor: '#0044cc',
    color: 'white',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    
  },
  buttonHover: {
    backgroundColor: '#0033aa',
  },
};

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const { first_name, last_name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { first_name, last_name, email, password };
    try {
      const res = await register(user);
      if (res) {
        navigate('/login'); // Redirect to the login page after registration
      }
    } catch (err) {
      console.error('Registration Error:', err.response ? err.response.data : err.message);
      window.alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container" style={styles.container}>
      <div className="form-container" style={styles.formContainer}>
        <h1 className="h3 mb-3 font-weight-normal" style={styles.heading}>
          Student Enroll Form
        </h1>
        <form noValidate onSubmit={onSubmit}>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="first_name" style={styles.label}>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Enter First Name"
              value={first_name}
              onChange={onChange}
              autoComplete="given-name"
              required
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="last_name" style={styles.label}>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Enter Last Name"
              value={last_name}
              onChange={onChange}
              autoComplete="family-name"
              required
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={onChange}
              autoComplete="email"
              required
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={onChange}
              autoComplete="new-password"
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
