import axios from 'axios';

import { HOST_URL } from '../constants/url';

export const commonRoutes = axios.create({
    baseURL: HOST_URL,
  });
  
export const privateRoutes = axios.create({
    baseURL: 'https://miraplay-test-server-2022.onrender.com',
    withCredentials: true,
  });
  
  export const token = {
    set(token) {
      privateRoutes.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset() {
      privateRoutes.defaults.headers.common['Authorization'] = '';
    },
  };