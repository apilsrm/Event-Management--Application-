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

export const login = async ({ setToken, data, navigate }) => {
  try {
    const response = await api.post('/auth/login', data);
    setToken(response.data.token);
    navigate('/');
    console.log(response)
  
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (data) => {
  const response = await api.post('/auth/register', data);
  console.log(response)
  return response.data;
};

export const fetchEvents = async (setEvents, setLoading) => {
  try {
    const response = await api.get('/events');
    setEvents(response.data);
    // console.log("dd",response.data)
    setLoading(false);
    return response.data;

  } catch (error) {
    
        console.log(error);
        setLoading(false);
  
  }
 
};

export const createEvent = async ({navigate, setLoading, data}) => {
  const response = await api.post('/events/create', data);
  setLoading(false);
  navigate("/");
  return response.data;
};

export const getSingleEvent = async(id, setInitialValues, setLoading) => {
 const response = await api.get(`events/${id}`)
 setInitialValues(response.data);
 setLoading(false);
};

// export const updateEvent = async (id, data, setLoading, navigate) => {

//   console.log("id", id.id)
//   const response = await api.put(`/events/${id.id}`, data);
//   // console.log("respone",response)
//   // console.log("responeData",response.data)

//   setLoading(false);
//   navigate("/");
//   return response.data;
// };

export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};
