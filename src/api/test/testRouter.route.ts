import { Request, Response, Router } from 'express';
import { connectDB } from '../../database';
const conn = connectDB();

const testRoute = Router();
const testRouter = (req: Request, res: Response) => {
    conn?.query('SELECT * FROM users', (err, users) => {
        if (err) return res.json({ error: err.message });
        return res.json({ message: 'Fetching Users from DB', users });
    });
};

testRoute.get('/', testRouter);
export { testRoute };
