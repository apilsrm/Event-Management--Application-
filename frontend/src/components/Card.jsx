import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineStart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdDescription } from "react-icons/md";
import { GoMoveToStart } from "react-icons/go";
const Card = ({ titleSearchTerm, dateSearchTerm, events }) => {
  
  const filteredEvents = events.filter((event) => {
    if (titleSearchTerm === "" && dateSearchTerm === "") {
      return true;
    }
    if (titleSearchTerm && event.title.toLowerCase().includes(titleSearchTerm.toLowerCase())) {
      return true;
    }
    if (dateSearchTerm && event.startDate.includes(dateSearchTerm)) {
      return true;
    }
    return false;
  });

  console.log("Filtered Events: ", filteredEvents);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEvents
            .map((event, index) => (
            <div
              key={event.id}
              className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
            >
              <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {index + 1}
              </h2>
              <div className="flex justify-start items-center gap-x-2">
                {/* <h4 className="my-2 text-gray-500">Tit.</h4> */}
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1 text-black">{event.title}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                {/* <h4 className="my-2 text-gray-500">Desc.</h4> */}
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
      </div>
    </>
  );
};

export default Card;
