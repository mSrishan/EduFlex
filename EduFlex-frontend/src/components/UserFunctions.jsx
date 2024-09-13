import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Backend URL
});

export const register = (newUser) => {
  return api.post('/users/register', {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password,
  })
    .then((response) => {
      window.alert('Registration successful');
      return response;
    })
    .catch((err) => {
      console.error('Registration error:', err.response ? err.response.data : err.message);
      window.alert('Registration failed. Please try again.');
      throw err;
    });
};

export const login = (user) => {
  return api.post('/users/login', {
    email: user.email,
    password: user.password,
  })
    .then((response) => {
      localStorage.setItem('usertoken', response.data.token); // Ensure token is saved correctly
      return response.data;
    })
    .catch((err) => {
      console.error('Login error:', err.response ? err.response.data : err.message);
      window.alert('Login failed. Please check your credentials.');
      throw err;
    });
};
