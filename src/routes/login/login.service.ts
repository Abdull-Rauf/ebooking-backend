import { loginQuery } from './login.query';
import { connectDB } from '../../database';
const conn = connectDB();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginService = async (username: string): Promise<any> => {
    try {
        const response = await conn?.promise().query(loginQuery, [username]);
        return response?.['0'];
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
