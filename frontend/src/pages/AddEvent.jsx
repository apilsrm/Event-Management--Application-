
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EventForm from '../components/EventForm';

const AddEvent = ({ token }) => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('/events', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate.push('/');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h1>Add Event</h1>
      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEvent;
