import { NextFunction, Request, Response } from 'express';
import { sendEmail } from '../../../services/email.service';
import {
    insertEventBookingService,
    getAllEventBookingService,
    capacityCheckByEventService,
    findBookingByBookingIdService,
    deleteBookingService,
    updateBookingService,
    doubleBookingCheckService,
    FindBookingByEmailService,
} from './eventBooking.service';

export const insertEventBookingController = (req: Request, res: Response): void => {
    const {
        fullName,
        mobNo,
        email,
        eventId,
        status,
        eventTime,
        eventDate,
        eventCategory,
    } = req.body;
    const bookingTime = new Date().toString();

    doubleBookingCheckService(email)
        .then((pres: any) => {
            const doubleCheck = pres.find((event: any) => event.event_category === eventCategory);
            if (doubleCheck) {
                return res.json({
                    isSuccess: 'failed',
                    message: 'Mob / email already registered!!!',
                });
            }

            capacityCheckByEventService(eventId).then((data) => {
                const bookingId = `${data.data.length + 1}`;

                insertEventBookingService({
                    fullName,
                    mobNo,
                    email,
                    bookingId,
                    eventId,
                    eventCategory,
                    bookingTime,
                    status,
                })
                    .then((resp) => {
                        const mailOptions = {
                            from: 'noreply@minhaj.se',
                            to: email,
                            subject: 'Confirmation: Minhaj Event Registration',
                            text: `Dear ${fullName},
Thank you for registration. \n
Your booking details:
Booking no: MQI-${eventId}/${bookingId}
Date: ${eventDate}
Time: ${eventTime}\n
Regards,
Minhaj IT Team`,
                        };
                        sendEmail(mailOptions);
                        return res.json({
                            ...resp,
                            bookingId,
                        });
                    })
                    .catch((error) => console.log(error));
            });
        })
        .catch((error) => console.log(error));

    // .catch((err) => err);
};

export const getAllEventBookingController = (req: Request, res: Response): void => {
    getAllEventBookingService()
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => console.log(error));
};

export const capacityCheckByEventController = (req: Request, res: Response): void => {
    const { eventId } = req.body;
    capacityCheckByEventService(eventId)
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => console.log(error));
};

export const findBookingByBookingIdController = (req: Request, res: Response): void => {
    const { bookingId } = req.body;
    findBookingByBookingIdService(bookingId)
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => console.log(error));
};
export const updateBookingController = (req: Request, res: Response): void => {
    const { status, bookingId } = req.query;
    console.log(status, bookingId);

    updateBookingService(status, bookingId)
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((error) => console.log(error));
};

export const deleteBookingController = (req: Request, res: Response, next: NextFunction): void => {
    const { email, eventId } = req.body;
    FindBookingByEmailService(email, eventId)
        .then((resp) => {
            if (resp.data.length > 0) {
                return deleteBookingService(email, eventId)
                    .then((data) => {
                        const mailOptions = {
                            from: 'noreply@minhaj.se',
                            to: email,
                            subject: 'Cancellation: Minhaj Event Registration',
                            text: `Your booking has been cancelled on your request. \n
 Regards,
 Minhaj IT Team`,
                        };
                        if (data.isSuccess) {
                            sendEmail(mailOptions);
                        }
                        return res.status(200).json(data);
                    })
                    .catch((error) => console.log(error));
            }
            return res.json({
                isSuccess: false,
                message: 'There is no booking with this email.',
            });
        })
        .catch((err) => err);
};
