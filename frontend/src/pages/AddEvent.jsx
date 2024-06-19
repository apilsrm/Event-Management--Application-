import axios from "axios";
import EventForm from "../components/EventForm"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";



const AddEvent = () => {
  const [loading, setLoading] = useState(false);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [totalParticipants, setTotalParticipants] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();




  const handleSubmit = async (data) => {
        try {
            //  const data = { title, description, totalParticipants, startDate, endDate};
            setLoading(true);
             
          // const response = await axios.post('/events', data, {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          axios
            .post("http://localhost:8000/api/events/create", data)
            .then(() => {
              setLoading(false);
              navigate("/");
              alert("book create successfully")
           })

        } catch (error) {
          console.error('Error creating event:', error);
        }
      };

  return (
    <div> 
       <h1>Add Event</h1>
       {loading ? <Spinner /> : ""}
      <EventForm   onSubmit={handleSubmit} />
    </div>
  )
}

export default AddEvent




// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EventForm from '../components/EventForm';

// const AddEvent = ({ token }) => {
//   const navigate = useNavigate();

//   const handleSubmit = async (data) => {
//     try {
//       const response = await axios.post('/events', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       navigate.push('/');
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Add Event</h1>
//       <EventForm onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default AddEvent;
