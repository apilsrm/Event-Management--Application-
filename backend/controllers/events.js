import events from "../../events.json.js";
import fs from "fs";

// Read events
const readEvents = (req, res) => {
    res.json(events);
};

// Create event
const createEvent = (req, res) => {
    const newEvent = req.body;
    events.push(newEvent);
    fs.writeFileSync('./events.json', JSON.stringify(events));
    res.json(newEvent);
};

// Update event
const updateEvent = (req, res) => {
    const { id } = req.params;
    const updatedEvent = req.body;
    events[id] = updatedEvent;
    fs.writeFileSync('./events.json', JSON.stringify(events));
    res.json(updatedEvent);
};

// Delete event
const deleteEvent = (req, res) => {
    const { id } = req.params;
    events.splice(id, 1);
    fs.writeFileSync('./events.json', JSON.stringify(events));
    res.json({ message: 'Event deleted successfully' });
};

module.exports = {
    readEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};
