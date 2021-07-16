import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { loginService } from './login.service';
import bcrypt from 'bcrypt';
type UserType = {
    [key: string]: string;
};
type BodyType = {
    [key: string]: string;
};

export const loginController = (req: Request, res: Response): void => {
    const { username, password }: BodyType = req.body;
    const secret: string = process.env.SECRET_KEY || '';
    loginService(username)
        .then((response: UserType[]) => {
            const user: UserType = response[0];
            bcrypt.compare(password, user.password, (err, verifiedPassword) => {
                if (err) {
                    return res.status(400).json({
                        message: 'Password Compare Failed!!!',
                        isLogin: false,
                        error: err.message,
                    });
                }
                if (user.username === username && verifiedPassword) {
                    return jwt.sign({ user }, secret, (error: any, token: any) => {
                        if (error) {
                            return res.status(400).json({
                                message: 'Token Generation Failed!!!',
                                isLogin: false,
                                error: error.message,
                            });
                        }
                        return res.status(200).json({
                            user: {
                                username: user.username,
                                role: user.role,
                                active: user.active,
                            },
                            message: 'Login successful!!!',
                            isLogin: true,
                            token,
                        });
                    });
                }
                return res.status(400).json({
                    message: 'Invalid username or password, Login Failed!!!',
                    isLogin: false,
                });
            });
        })
        .catch((err) => {
            return res.status(400).json({
                message: 'Login Failed!!!',
                isLogin: false,
                error: err.message,
            });
        });
};
