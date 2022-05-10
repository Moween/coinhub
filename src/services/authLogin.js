import axios from 'axios';
import { config } from '../config/config';
import { encodeFormData } from '../utils/_helpers';

const loginService = async (data) => {
  try {
    return await axios({
      url: `${config.authBaseUrl}/sessions`,
      method: 'POST',
      data: encodeFormData(data),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'base4.p.rapidapi.com',
        'X-RapidAPI-Key': config.rapidApiKey,
      },
    });
  } catch (error) {}
};

export default loginService;
