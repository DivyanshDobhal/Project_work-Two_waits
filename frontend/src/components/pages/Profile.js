import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchProfile } from '../../api';
import '../../App.css';
import '../../pages/Auth.css';

export default function Profile() {
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('Loading your profile...');

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        history.replace('/login');
        return;
      }

      try {
        const data = await fetchProfile(token);
        setProfile(data);
        setMessage('');
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        setMessage(error.data?.message || 'Unable to load profile. Please sign in again.');
        history.replace('/login');
      }
    };

    loadProfile();
  }, [history]);

  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <h2>Your Profile</h2>
        {message && !profile && <p className='auth-message'>{message}</p>}
        {profile && (
          <div className='profile-details'>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Member ID:</strong> {profile._id}</p>
          </div>
        )}
      </div>
    </div>
  );
}
