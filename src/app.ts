import * as dotenv from 'dotenv';
dotenv.config();
import { AppType } from 'types';
import { baseRouter } from './routes';
import { SignUpRouter } from './routes/signup';
import { LoginRouter } from './routes/login';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = (app: AppType) => {
    app.use('/', SignUpRouter);
    app.use('/', LoginRouter);
    app.use('/', baseRouter);
};

export { App };
