import { Router } from 'express';
import { signUpController } from './signup.controller';

const SignUpRouter = Router();
SignUpRouter.post('/signup', signUpController);

export { SignUpRouter };
