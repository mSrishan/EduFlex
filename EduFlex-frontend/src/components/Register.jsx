import React, { useState } from 'react';
import { register } from './UserFunctions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
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
                navigate('/login');
            }
        } catch (err) {
            console.error('Registration Error:', err.response ? err.response.data : err.message);
            window.alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight-normal'>
                            <p align="center">Student Enroll Form</p>
                        </h1>
                        <div className='form-group'>
                            <label htmlFor='first_name'>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='first_name'
                                placeholder='Enter First Name'
                                value={first_name}
                                onChange={onChange}
                                autoComplete='given-name'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='last_name'>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='last_name'
                                placeholder='Enter Last Name'
                                value={last_name}
                                onChange={onChange}
                                autoComplete='family-name'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={onChange}
                                autoComplete='email'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={onChange}
                                autoComplete='new-password'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-lg btn-primary btn-block'>Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
