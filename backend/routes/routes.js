import { Router } from "express";


// import  { validate } from "../middleware/validation.js";
// import { authenticate } from "../middleware/auth.js";
// import {eventValidators} from "../middleware/eventValidators.js";

import { readEvents, createEvent, updateEvent, deleteEvent, getSingleEvent } from "../controllers/event.controller.js"

// const router = express.Router();
const router = Router()


// CRUD operations
router.get('/', readEvents);
// router.post('/create', authenticate, eventValidators, validate, createEvent);
// router.put('/:id', authenticate, eventValidators, validate, updateEvent);

router.post('/create', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
// Add the new route for fetching a single event by ID
router.get('/:id', getSingleEvent);

export default router;
