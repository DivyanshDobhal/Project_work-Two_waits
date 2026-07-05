import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../../api';
import '../../App.css';
import '../../pages/Auth.css';

export default function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setMessage('Please complete all fields.');
      return;
    }

    try {
      const data = await registerUser(formData);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('authUser', JSON.stringify({ name: data.name, email: data.email }));
      setMessage('Registration successful. Redirecting...');
      history.push('/profile');
    } catch (error) {
      setMessage(error.data?.message || error.message || 'Failed to register.');
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <h2>Create Account</h2>
        <p className='auth-subtitle'>Start your membership with a secure account.</p>
        <form className='auth-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
            className='auth-input'
            placeholder='Enter your name'
          />

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
            placeholder='Create a password'
          />

          <button type='submit' className='auth-button'>
            Register
          </button>
          {message && <p className='auth-message'>{message}</p>}
        </form>
        <p className='auth-options'>
          Already have an account? <Link to='/login'>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
