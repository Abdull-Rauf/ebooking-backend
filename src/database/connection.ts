import mysql from 'mysql2';
import { config } from '../config';
// import { DatabaseConnectionTypes } from '../types';

// create the connection to database
export const connectDB = (): mysql.Connection | undefined => {
    const { user, host, password, database, port } = config.db_conn;
    // const connectionObject = {
    //     user,
    //     host,
    //     password,
    //     database,
    //     port,
    //     multipleStatements,
    // };
    try {
        const conn = mysql.createConnection({
            user,
            host,
            password,
            database,
            port,
        });
        console.log('db connected');
        return conn;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error >>>>', error);
    }
};
