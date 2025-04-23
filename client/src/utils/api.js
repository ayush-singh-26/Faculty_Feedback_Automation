import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const login = async (credentials) => {
  return api.post('/auth/login', credentials);
};

export const getFacultyData = async () => {
  return api.get('/faculty');
};