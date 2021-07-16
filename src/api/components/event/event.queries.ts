import { config } from '../../../config';
const { event } = config.db_tables;

export const insertEventQuery = `INSERT into ${event}
(event_name, event_time, event_date)
Values (?,?,?)`;

export const getAllEventQuery = `SELECT  * FROM ${event}`;
