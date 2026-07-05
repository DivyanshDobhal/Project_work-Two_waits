const DEFAULT_LOCAL_API_PORT = 5002;
const API_BASE =
  process.env.REACT_APP_API_URL ||
  (typeof window !== 'undefined' && window.REACT_APP_API_URL) ||
  (typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.hostname}:${DEFAULT_LOCAL_API_PORT}/api`
    : '/api');

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(data?.message || 'API request failed');
    error.response = response;
    error.data = data;
    throw error;
  }

  return data;
};

export const registerUser = (userData) =>
  request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });

export const loginUser = (credentials) =>
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

export const fetchProfile = (token) =>
  request('/auth/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
