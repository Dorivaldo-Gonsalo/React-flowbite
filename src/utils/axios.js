// src/utils/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // ou a URL da sua API

});

export default axiosInstance;