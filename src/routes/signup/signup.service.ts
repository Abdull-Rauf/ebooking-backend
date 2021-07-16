import { signUpQuery } from './signup.query';
import { connectDB } from '../../database';
const conn = connectDB();
type User = {
    [key: string]: string;
};
export const signUpService = async ({
    username,
    hashPassword,
    role,
    active,
}: User): Promise<any> => {
    try {
        const response = await conn
            ?.promise()
            .query(signUpQuery, [username, hashPassword, role, active]);
        return {
            message: 'Successfully inserted',
            statusText: 'success',
            isSuccess: true,
            response,
        };
    } catch (error) {
        return { message: error.message, statusText: 'failed', isSuccess: false };
    }
};
