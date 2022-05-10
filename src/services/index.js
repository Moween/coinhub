import axios from 'axios';
import { toast } from 'react-toastify';
import loginService from './authLogin';
import registerService from './authSignup';
import { saveToken } from '../utils/_helpers';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

/* response interceptors */
axios.interceptors.response.use((config) => {
  if(Object.keys(config.data) > 0) {
    saveToken(config.data.id)
  }
}, 
(error) => {
  toast.error(error.message);
  return Promise.reject(error);
});

export { loginService, registerService };
