import EventForm from "../components/EventForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { getSingleEvent } from "../api";
import axios from "axios";

const EditEvent = ({ token }) => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
    setLoading(true);
    getSingleEvent(id, setInitialValues, setLoading)

    } catch (error) {
      console.error("Error fetching event:", error)
    }


    // axios.get(`/events/${id}`, {
    //   headers: { Authorization: `Bearer ${token}` }
    // })
    // axios
    //   .get(`http://localhost:8000/api/events/${id}`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //           })
    //   .then((response) => {
    //     setInitialValues(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => console.error("Error fetching event:", error));
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      // console.log("heeid", id)
      // await updateEvent(data, id, setLoading, navigate)
    
      await axios.put(`http://localhost:8000/api/events/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(() => {
         setLoading(false);
          navigate("/"); 
        });
    } catch (error) {
      console.error("Error updating event:", error);
    }
  }

  return (
    <div className="py-4">
      <BackButton/>
      <h1 className="text-3xl my-4 text-center align-item-center" >Edit Event</h1>
      {loading ? <Spinner /> : ""}
      <EventForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default EditEvent;

//   useEffect(() => {
//     axios.get(`/events/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(response => setInitialValues(response.data))
//     .catch(error => console.error('Error fetching event:', error));
//   }, [id, token]);

//   const handleSubmit = async (data) => {
//     try {
//       await axios.put(`/events/${id}`, data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       navigate('/');
//     } catch (error) {
//       console.error('Error updating event:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Event</h1>
//       <EventForm onSubmit={handleSubmit} initialValues={initialValues} />
//     </div>
//   );
// };

// export default EditEvent;
