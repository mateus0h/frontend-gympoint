import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.apimateus.life/gobarber',
});
export default api;
