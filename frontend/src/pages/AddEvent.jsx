import axios from "axios";
import EventForm from "../components/EventForm"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";



const AddEvent = ({ token }) => {
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
            .post("http://localhost:8000/api/events/create", data, {
              headers: { Authorization: `Bearer ${token}` }
            })
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
    <div className="py-4 "> 
       <BackButton />
       <h1 className="text-3xl my-4 text-center align-item-center">Add Event</h1>
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
