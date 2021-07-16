import { Router } from 'express';
import {
    insertEventBookingController,
    getAllEventBookingController,
    findBookingByBookingIdController,
    capacityCheckByEventController,
    deleteBookingController,
    updateBookingController,
} from './eventBooking.controller';

const EventBookingRouter = Router();
EventBookingRouter.post('/new', insertEventBookingController);
EventBookingRouter.post('/find', findBookingByBookingIdController);
EventBookingRouter.post('/cancel', deleteBookingController);
EventBookingRouter.post('/capacity-check', capacityCheckByEventController);
EventBookingRouter.get('/update', updateBookingController);
EventBookingRouter.get('/', getAllEventBookingController);

export { EventBookingRouter };
