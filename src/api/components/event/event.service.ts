import { insertEventQuery, getAllEventQuery } from './event.queries';
import { connectDB } from '../../../database';
const conn = connectDB();
type User = {
    [key: string]: string;
};
export const insertEventService = async ({
    eventName,
    eventTime,
    eventDate,
}: User): Promise<any> => {
    try {
        const response = await conn
            ?.promise()
            .query(insertEventQuery, [eventName, eventTime, eventDate]);
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

export const getAllEventService = async (): Promise<any> => {
    try {
        const response = await conn?.promise().query(getAllEventQuery);
        return response?.['0'];
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
