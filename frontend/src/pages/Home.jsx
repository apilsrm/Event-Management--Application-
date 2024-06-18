import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EventList from '../components/EventList';
import Filter from '../components/Filter';

const Home = ({ token }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get('/events', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data);
      })
      .catch(error => console.error('Error fetching events:', error));
    }
  }, [token]);

  // const handleFilter = (name, value) => {
  //   const filtered = events.filter(event =>
  //     event[name].toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredEvents(filtered);
  // };

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`/events/${id}`, {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      await axios.delete(`/events/${id}`, {
      });
      setEvents(events.filter(event => event.id !== id));
      setFilteredEvents(filteredEvents.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h1>Event Management</h1>
      {/* <Filter onFilter={handleFilter} /> */}
      <EventList events={filteredEvents} onDelete={handleDelete} />
      <button onClick={() => navigate('/add')}>Add Event</button>
    </div>
  );
};

export default Home;
