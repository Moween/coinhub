import axios from 'axios';
import { config } from '../config/config';
import { encodeFormData } from '../utils/_helpers';

const registerService = async (userDetails) => {
  const response = await axios({
    method: 'POST',
    url: `${config.authBaseUrl}/users`,
    data: encodeFormData(userDetails),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'base4.p.rapidapi.com',
      'X-RapidAPI-Key': config.rapidApiKey,
    },
  });
  return response;
};

export default registerService;
