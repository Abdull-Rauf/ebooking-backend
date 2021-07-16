import { Request, response, Response } from 'express';
import bcrypt from 'bcrypt';
import { signUpService } from './signup.service';

export const signUpController = (req: Request, res: Response): void => {
    const { username, password, role, active } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashPassword: string) => {
        if (err) return { error: err };
        const user = { username, hashPassword, role, active };
        signUpService(user)
            .then((data) => {
                if (data?.isSuccess) {
                    return res.status(200).json(data);
                }
                return res.status(400).json(data);
            })
            .catch((error) => console.log(error));
    });
};
