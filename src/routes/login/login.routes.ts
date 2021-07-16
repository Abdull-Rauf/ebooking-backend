import { Router } from 'express';
import { loginController } from './login.controller';

const LoginRouter = Router();
LoginRouter.post('/login', loginController);

export { LoginRouter };
