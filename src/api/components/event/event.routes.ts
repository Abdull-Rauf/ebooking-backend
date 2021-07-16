import { Router } from 'express';
import { insertEventController, getAllEventController } from './event.controller';

const EventRouter = Router();
EventRouter.post('/new', insertEventController);
EventRouter.get('/', getAllEventController);

export { EventRouter };
