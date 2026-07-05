import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../api';
import '../../App.css';
import '../../pages/Auth.css';

export default function SignIn() {
  const history = useHistory();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage('Please enter both email and password.');
      return;
    }

    try {
      const data = await loginUser(formData);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('authUser', JSON.stringify({ name: data.name, email: data.email }));
      setMessage('Signed in successfully. Redirecting...');
      history.push('/profile');
    } catch (error) {
      setMessage(error.data?.message || error.message || 'Failed to sign in.');
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <h2>Login</h2>
        <p className='auth-subtitle'>Welcome back! Enter your credentials to sign in.</p>
        <form className='auth-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            className='auth-input'
            placeholder='Enter your email'
          />

          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            className='auth-input'
            placeholder='Enter your password'
          />

          <button type='submit' className='auth-button'>
            Sign In
          </button>
          {message && <p className='auth-message'>{message}</p>}
        </form>
        <p className='auth-options'>
          Need an account? <Link to='/register'>Register here</Link>
        </p>
      </div>
    </div>
  );
}
