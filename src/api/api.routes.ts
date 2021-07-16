import { Router } from 'express';
import { testRoute } from './test';
import { auth } from './middleware/auth';

const AppRouter = Router();
AppRouter.all('*', auth);
AppRouter.use('/test', testRoute);

export { AppRouter };
