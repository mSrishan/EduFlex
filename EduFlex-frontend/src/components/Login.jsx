import React, { Component } from 'react';
import { login } from './UserFunctions';
// If using React Router v6, use the useNavigate hook instead

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) { 
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        login(user).then(res => {
            if (res) {
                // If using React Router v6, use navigate from useNavigate hook
                this.props.history.push('/profile');
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>
                                <p align="center">Student Login</p>
                            </h1>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter Email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'  // Changed to 'password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Enter Password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-lg btn-primary btn-block'>Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
