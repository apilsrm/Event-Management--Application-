import { Link } from 'react-router-dom';
import EventList from "../components/EventList"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineAddBox } from 'react-icons/md';


import Spinner from "../components/Spinner"

const Home = () => {
  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/events")
      .then((res) => {
        // console.log(res.data)
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  


  return (
    <>
    <div className='p-4'>
    
    <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">events List</h1>
          <Link to="/events/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>

            {loading ? (
              <Spinner />
            ) 
            :
            (

              <EventList events={events} />
            )

            }
     </div>
      
    </>
  )
}

export default Home










// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EventList from '../components/EventList';
// // import Filter from '../components/Filter';

// const Home = ({ token }) => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       axios.get('/events', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(response => {
//         setEvents(response.data);
//         setFilteredEvents(response.data);
//       })
//       .catch(error => console.error('Error fetching events:', error));
//     }
//   }, [token]);

//   // const handleFilter = (name, value) => {
//   //   const filtered = events.filter(event =>
//   //     event[name].toLowerCase().includes(value.toLowerCase())
//   //   );
//   //   setFilteredEvents(filtered);
//   // };

//   const handleDelete = async (id) => {
//     try {
//       // await axios.delete(`/events/${id}`, {
//       //   headers: { Authorization: `Bearer ${token}` }
//       // });
//       await axios.delete(`/events/${id}`, {
//       });
//       setEvents(events.filter(event => event.id !== id));
//       setFilteredEvents(filteredEvents.filter(event => event.id !== id));
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Event Management</h1>
//       {/* <Filter onFilter={handleFilter} /> */}
//       <EventList events={filteredEvents} onDelete={handleDelete} />
//       <button onClick={() => navigate('/add')}>Add Event</button>
//     </div>
//   );
// };

// export default Home;
