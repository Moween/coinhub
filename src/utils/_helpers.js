export const encodeFormData = (data) => {
  const encodedParams = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    encodedParams.append(key, data[key]);
  });
  return encodedParams;
};

export const authHeader = () => {
  const token = getToken();

  if (token) {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
};

export const getToken = () => localStorage.getItem('yanga_bills_token');

export const saveToken = (token) => {
  localStorage.setItem('yanga_bills_token', token);
};

export const generateKey = (length = 20) => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for(let i = 0; i < length; i++) {
   const charactersLength = str.length;
     key += str.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
}
