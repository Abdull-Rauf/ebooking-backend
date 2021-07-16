import { Router } from 'express';
import { AppRouter } from '../api';
import { EventBookingRouter } from '../api/components/eventBooking/eventBooking.routes';
import { EventRouter } from '../api/components/event/event.routes';

const baseRouter = Router();

baseRouter.use('/api', AppRouter);
baseRouter.use('/api-event/booking', EventBookingRouter);
baseRouter.use('/api-event/event', EventRouter);

export { baseRouter };
