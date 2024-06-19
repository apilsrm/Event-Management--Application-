
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
const EventList = ({ events}) => {
  return (
    <>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
            Description
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
            Total Participants
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
            Start Date
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
            End Date
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event, index) => {
            return (
              <tr key={event.id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {event.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {event.description}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {event.totalParticipants}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {event.startDate}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {event.endDate}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/events/details/${event.id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/events/edit/${event.id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/events/delete/${event.id}`}>
                      <MdOutlineDelete className="text-2xl text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>

  );
};

export default EventList;

