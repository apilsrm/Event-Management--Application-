import { check } from "express-validator";

const eventValidators = [
    check('title').notEmpty().withMessage('Title is required'),
    check('description').notEmpty().withMessage('Description is required'),
    check('totalParticipants').isInt({ min: 1 }).withMessage('Total number of participants must be a positive integer'),
    check('startDate').isISO8601().withMessage('Start date must be a valid date'),
    check('endDate').isISO8601().withMessage('End date must be a valid date'),
];

export {
    eventValidators
}
