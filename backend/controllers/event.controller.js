
import fs from"fs";
import path from "path";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})


const dirname = process.env.DIR_NAME ;  //give your project folder dir here

// console.log("dirname",dirname);

// const filePath = path.join("process.env.DIR_NAME", "../../events.json")
const filePath = path.join(`${dirname}`,"/events.json")

// console.log("filepath",filePath)

const readEvents = (req, res) => {
    const data = fs.readFileSync(filePath, 'utf-8'); //fs.readFileSync to read the contents of a file specified by filePath. This file presumably contains a JSON array of existing events
    const events = JSON.parse(data); //to convert text into a JavaScript object:

    res.json(events); 
};

const createEvent = (req, res) => {

    const newEvent = req.body;
    const data = fs.readFileSync(filePath, 'utf-8');
    const events = JSON.parse(data);
 
    //asign id 
    newEvent.id = events.length ? events[events.length -1].id + 1 : 1;

    events.push(newEvent); //appended to the list of existing events
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));

    res.status(201).json({ message: 'Event created successfully', newEvent});
};

const updateEvent = (req, res) => {
    const { id } = req.params;
    const updatedEvent = req.body;
    const data = fs.readFileSync(filePath, 'utf-8');
    const events = JSON.parse(data);
    const index = events.findIndex((event) => event.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Event not found' });
    }
    events[index] = { ...events[index], ...updatedEvent };
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
    // res.status(201).json(
    //     {
    //         events[index],
    //         message: 'Event created successfully'
        
    //     }
    //     );

    res.json(events[index]);
};

const deleteEvent = (req, res) => {
    const { id } = req.params;

    const data = fs.readFileSync(filePath, 'utf-8');
    const events = JSON.parse(data);

    const updatedEvents = events.filter((event) => event.id !== parseInt(id));
    if (events.length === updatedEvents.length) {
        return res.status(404).json({ message: 'Event not found' });
    }
    fs.writeFileSync(filePath, JSON.stringify(updatedEvents, null, 2));
    res.json({ message: 'Event deleted successfully' });
};

export {
    readEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};
