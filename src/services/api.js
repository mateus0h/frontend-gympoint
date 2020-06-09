import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.apimateus.life/',
});
export default api;
