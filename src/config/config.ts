const base = {
    db_conn: {
        host: '127.0.0.1',
        user: 'root',
        password: '1234567890',
        database: 'mqi_admin',
        port: 3306,
    },
    db_tables: {
        event: 'event',
        eventBooking: 'event_booking',
    },
};

const development = {
    ...base,
};

const production = {
    ...base,
};

const config = process.env.NODE_ENV === 'production' ? production : development;

export { config };
