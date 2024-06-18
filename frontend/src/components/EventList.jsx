
const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-item">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Participants: {event.totalParticipants}</p>
          <p>Start Date: {event.startDate}</p>
          <p>End Date: {event.endDate}</p>
          <button onClick={() => onEdit(event.id)}>Edit</button>
          <button onClick={() => onDelete(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
