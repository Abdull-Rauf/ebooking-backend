import { Request, Response } from 'express';
import { insertEventService, getAllEventService } from './event.service';

export const insertEventController = (req: Request, res: Response): void => {
    const { eventName, eventTime, eventDate } = req.body;
    insertEventService({ eventName, eventTime, eventDate })
        .then((data) => {
            if (data?.isSuccess) {
                return res.status(200).json(data);
            }
            return res.status(400).json(data);
        })
        .catch((error) => console.log(error));
};

export const getAllEventController = (req: Request, res: Response): void => {
    getAllEventService()
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => console.log(error));
};
