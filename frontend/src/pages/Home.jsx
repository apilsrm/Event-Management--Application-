import { Link } from 'react-router-dom';
// import EventList from "../components/EventList"
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { MdOutlineAddBox } from 'react-icons/md';


import Spinner from "../components/Spinner"
import { fetchEvents } from '../api';
import Card from '../components/Card';


const Home = () => {
  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [titleSearchTerm, setTitleSearchTerm] = useState("");
  const [dateSearchTerm, setDateSearchTerm] = useState("");
  // const [filteredEvents, setFilteredEvents] = useState({events});



  useEffect(() => {
    setLoading(true);
    fetchEvents(setEvents, setLoading)
         

    
    // axios
       // .get("http://localhost:8000/api/events")    
       // .then((res) => {
        // setEvents(response.data);
        // setLoading(false);
        //   // console.log(res.data)
        // // })
        // .catch((err) => {
        //   console.log(err);
        //   setLoading(false);
        // });
      
  }, []);

  
//  useEffect(() => {
//   if(searchTerm == ""){
//     return filteredEvents
//   }
//   const filtered = events.filter(value =>
//       value.title.toLowerCase().includes(searchTerm.toLowerCase())
//     ) 
//     setFilteredEvents(filtered)
//     // {
//     //   filtered ? (setFilteredEvents(filtered)):("")
//     // }
   

//   },[events, filteredEvents, searchTerm])

useEffect(() => {
  console.log("Events: ", events);
}, [events]);

useEffect(() => {
  console.log("Title Search Term: ", titleSearchTerm);
}, [titleSearchTerm]);

useEffect(() => {
  console.log("Date Search Term: ", dateSearchTerm);
}, [dateSearchTerm]);

  return (
    <>
    <div className='p-4'>
    
    <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Events List</h1>
          <input  type="text"
                  name="title"
                  onChange={(e) => {setTitleSearchTerm(e.target.value)}} 
                  placeholder="Filter by Title"
                  className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl" />
          <input  type="text"
                  name="startDate"
                  onChange={(e) => {setDateSearchTerm(e.target.value)}} 
                  placeholder="Filter by Start Date"
                  className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl" />

            <Link to="/events/create">
            <MdOutlineAddBox className="text-sky-700 text-6xl" />
          </Link>
        </div>

            {loading ? (
              <Spinner />
            ) 
            :
            (
              // <EventList  events={events} />
              <Card titleSearchTerm={titleSearchTerm} dateSearchTerm={dateSearchTerm} events={events} />
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
