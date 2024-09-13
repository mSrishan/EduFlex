import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode'; // Correct namespace import

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      isEditing: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('usertoken'); // Ensure the correct token key
    if (token) {
      try {
        const decodedToken = jwt_decode.default(token); // Correctly access the default export from jwt-decode
        this.setState({
          first_name: decodedToken.first_name,
          last_name: decodedToken.last_name,
          email: decodedToken.email,
        });
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('Token not found in localStorage');
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(this.state)); // Save details to localStorage
    this.props.navigate('/profile-details'); // Navigate to ProfileDetails component
  };

  render() {
    const { first_name, last_name, email, isEditing } = this.state;

    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="first_name"
                      value={first_name}
                      onChange={this.handleChange}
                    />
                  ) : (
                    first_name
                  )}
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="last_name"
                      value={last_name}
                      onChange={this.handleChange}
                    />
                  ) : (
                    last_name
                  )}
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  ) : (
                    email
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            {isEditing ? (
              <button className="btn btn-primary" onClick={this.handleSave}>
                Save
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={this.handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Wrap component with `useNavigate` for navigation
export default function ProfileWithNavigation(props) {
  const navigate = useNavigate();
  return <Profile {...props} navigate={navigate} />;
}
