import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsAPI = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const saveContactAPI = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to save contact');
  }
};

export const deleteContactAPI = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};
