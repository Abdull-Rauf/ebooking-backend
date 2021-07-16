import {
    insertEventBookingQuery,
    getAllEventBookingQuery,
    capacityCheckByEventQuery,
    findBookingByBookingIdQuery,
    updateBookingQuery,
    deleteBookingQuery,
    doubleBookingCheck,
    findBookingByEmailIdQuery,
} from './eventBooking.queries';
import { connectDB } from '../../../database';
const conn = connectDB();
type BookingType = {
    [key: string]: string;
};
export const insertEventBookingService = async ({
    fullName,
    mobNo,
    email,
    bookingId,
    eventId,
    eventCategory,
    bookingTime,
    status,
}: BookingType): Promise<any> => {
    try {
        const response = await conn
            ?.promise()
            .query(insertEventBookingQuery, [
                fullName,
                mobNo,
                email,
                bookingId,
                eventId,
                eventCategory,
                bookingTime,
                status,
            ]);

        return {
            message: 'Successfully inserted',
            statusText: 'success',
            isSuccess: true,
            data: response && response[0],
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
export const doubleBookingCheckService = async (email: string): Promise<any> => {
    try {
        const response = await conn?.promise().query(doubleBookingCheck, [email]);
        return response?.['0'];
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
export const getAllEventBookingService = async (): Promise<any> => {
    try {
        const response = await conn?.promise().query(getAllEventBookingQuery);
        return response?.['0'];
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};

export const capacityCheckByEventService = async (eventId: string): Promise<any> => {
    try {
        const response = await conn?.promise().query(capacityCheckByEventQuery, [eventId]);
        return {
            message: 'Successfully inserted',
            statusText: 'success',
            isSuccess: true,
            data: response && response[0],
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};

export const findBookingByBookingIdService = async (bookingId: string): Promise<any> => {
    try {
        const response = await conn?.promise().query(findBookingByBookingIdQuery, [bookingId]);
        return {
            message: 'Successfully inserted',
            statusText: 'success',
            isSuccess: true,
            data: response && response[0],
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};

export const updateBookingService = async (status: any, bookingId: any): Promise<any> => {
    try {
        const response = await conn?.promise().query(updateBookingQuery, [status, bookingId]);
        return {
            message: 'Successfully Updated',
            statusText: 'success',
            isSuccess: true,
            data: response,
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};

export const deleteBookingService = async (email: string, eventId: number): Promise<any> => {
    try {
        await conn?.promise().query(deleteBookingQuery, [email, eventId]);
        return {
            message: 'Booking cancelled',
            statusText: 'success',
            isSuccess: true,
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};

export const FindBookingByEmailService = async (email: string, eventId: number): Promise<any> => {
    try {
        const response = await conn?.promise().query(findBookingByEmailIdQuery, [email, eventId]);
        return {
            message: 'Booking cancelled',
            statusText: 'success',
            isSuccess: true,
            data: response && response[0],
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
