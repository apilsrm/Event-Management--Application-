import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; //backend url

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const login = async (data) => {
  const response = await api.post('/auth/login', data);
  console.log(response)

  return response.data;
};
export const register = async (data) => {
  const response = await api.post('/auth/register', data);
  console.log(response)
  return response.data;
};

export const fetchEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const createEvent = async (data) => {
  const response = await api.post('/events/create', data);
  return response.data;
};

export const updateEvent = async (id, data) => {
  const response = await api.put(`/events/${id}`, data);
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};
