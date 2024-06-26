import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineStart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { GoMoveToStart } from "react-icons/go";
import { useEffect, useState } from 'react';
import { fetchEvents } from "../api";
import Spinner from "./Spinner";


const Filter = () => {
     
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetchEvents(setEvents, setLoading)
         
      
  }, []);

  // const handleFilter = (name, value) => {
//   //   const filtered = events.filter(event =>
//   //     event[name].toLowerCase().includes(value.toLowerCase())
//   //   );
//   //   setFilteredEvents(filtered);
//   // };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
    <div className="filter">
      <input name="title" onChange={handleFilterChange} placeholder="Filter by Title" />
      {""}
      <input name="startDate" onChange={handleFilterChange} placeholder="Filter by Start Date" type="date" />
      {""}
      <input name="endDate" onChange={handleFilterChange} placeholder="Filter by End Date" type="date" />
    </div>
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
      {loading ? ( <Spinner/>) : 
      (

        {events.map((event, index) => (
             
          <div
             key={event.id}
             className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
           >
             <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">{index + 1}</h2>
             <div className="flex justify-start items-center gap-x-2">
         
               <PiBookOpenTextLight className="text-red-300 text-2xl" />
               <h2 className="my-1 text-black">{event.title}</h2>
             </div>
             <div className="flex justify-start items-center gap-x-2">
        
               <MdDescription className="text-red-300 text-2xl" />
               <h2 className="my-1">{event.description}</h2>
             </div>
             <div className="flex justify-start items-center gap-x-2">
               <BiUserCircle className="text-red-300 text-2xl" />
               <h2 className="my-1">{event.totalParticipants}</h2>
             </div>
             <div className="flex justify-start items-center gap-x-2">
               <MdOutlineStart className="text-red-300 text-2xl" />
               <h2 className="my-1">{event.startDate}</h2>
             </div>
             <div className="flex justify-start items-center gap-x-2">
               <GoMoveToStart className="text-red-300 text-2xl" />
               <h2 className="my-1">{event.endDate}</h2>
             </div>
             <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
             
               <Link to={`/events/details/${event.id}`}>
                 <BsInfoCircle className="text-2xl text-yellow-500 hover:text-black" />
               </Link>
       
               <Link to={`/events/edit/${event.id}`}>
                 <AiOutlineEdit className="text-2xl text-green-800 hover:text-black" />
               </Link>
       
               <Link to={`/events/delete/${event.id}`}>
                 <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
               </Link>
             </div>
             
           </div>
       
   
        ))}
      )}

   </div>
   </>
  );
};

export default Filter;
