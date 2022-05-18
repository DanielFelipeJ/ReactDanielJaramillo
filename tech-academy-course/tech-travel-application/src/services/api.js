import axios from 'axios';

const api = axios.create({
  baseURL: 'https://628487eb3060bbd3473a4226.mockapi.io/',
});

export default api;
