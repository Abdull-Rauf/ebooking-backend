import { Application } from 'express';

declare module 'types' {
    export type AppType = Application;
    export type ApiErrorResponse = {
        status: number;
        error: string;
    };

    export type ApiMessageResponse = {
        message: string;
    };
    export type LoggerResponse = {
        service?: string;
        status?: number;
        statusText?: string;
        endpoint?: string;
        pathname?: string;
    };
    export type DatabaseConnectionTypes = {
        host: string | undefined;
        user: string | undefined;
        password: string | undefined;
        database: string | undefined;
        port: number | undefined;
        multipleStatements: boolean | undefined;
    };
}
