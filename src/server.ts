import express from 'express';
import { App } from './app';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// Types
import { AppType } from 'types';

const app: AppType = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(
    cors({
        origin: '*',
    })
);
app.use(bodyParser.json());
App(app);

app.set('port', PORT);
app.listen(PORT, () => console.log(`Server started at 📡 ${PORT}`));
