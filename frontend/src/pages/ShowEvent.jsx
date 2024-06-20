import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowEvent = () => {
   const [event, setEvent]= useState([]);
   const [loading, setLoading]= useState(false);
   const { id } = useParams();

   useEffect(() => {
    setLoading(true);
      axios
        .get(`http://localhost:8000/api/events/${id}`)
        .then((res) => {
          // console.log("res",res);
          // console.log(res.data);
          setEvent(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error fetching event:", err);
          setLoading(false);
        });
   }, [id])
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Event</h1>
       {loading ? (
        <Spinner />
       ) : (
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        {/* <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Id : </span>
          <span>{event.id}</span>
        </div> */}
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title : </span>
          <span>{event.title}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Description : </span>
          <span>{event.description}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Total Participants : </span>
          <span>{event.totalParticipants}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Start Date : </span>
          <span>{event.startDate}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year : </span>
          <span>{event.endDate}</span>
        </div>
        
      </div>
       )}
    </div>
  )
}

export default ShowEvent
