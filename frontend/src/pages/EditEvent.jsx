import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EventForm from '../components/EventForm';

const EditEvent = ({ token }) => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => setInitialValues(response.data))
    .catch(error => console.error('Error fetching event:', error));
  }, [id, token]);

  const handleSubmit = async (data) => {
    try {
      await axios.put(`/events/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h1>Edit Event</h1>
      <EventForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default EditEvent;
