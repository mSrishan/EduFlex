import React, { Component } from 'react';
import * as jwt_decode from 'jwt-decode'; // Correct way to import named export
// Named import syntax

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        };
    }

    

    componentDidMount() {
    const token = localStorage.getItem('jwtToken'); // or wherever you store your token
    if (token) {
      try {
        const decodedtoken = jwt_decode(token);
          // use decodedToken as needed
          this.setState({
                    first_name: decodedtoken.first_name,
                    last_name: decodedtoken.last_name,
                    email: decodedtoken.email
                });
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }



    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        <h1 className='text-center'>PROFILE</h1>
                    </div>
                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Profile;
