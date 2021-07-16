/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const secret: string = process.env.SECRET_KEY || '';
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        return jwt.verify(token, secret, (err: any) => {
            if (err) {
                return res.status(401).json({ message: 'Wrong token!!!!!' });
            }
            next();
        });
    }
    return res.status(403).json({ message: 'Missing token!!!!!' });
};
