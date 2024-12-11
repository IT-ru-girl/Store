import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

const login = (credentials: Credential) => api.post('/auth/login', credentials);

export default {
  login,
};
