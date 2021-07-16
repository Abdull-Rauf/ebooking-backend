import { config } from '../../../config';
const { eventBooking } = config.db_tables;

export const insertEventBookingQuery = `INSERT into ${eventBooking}
(full_name, mob_no, email, booking_id, event_id, event_category, booking_time, status)
Values (?,?,?,?,?,?,?,?)`;

export const getAllEventBookingQuery = `SELECT  * FROM ${eventBooking}`;

export const capacityCheckByEventQuery = `SELECT * FROM ${eventBooking} WHERE event_id=?`;
export const doubleBookingCheck = `SELECT * FROM ${eventBooking} WHERE email=?`;

export const findBookingByBookingIdQuery = `SELECT * FROM ${eventBooking} WHERE booking_id=?`;
// eslint-disable-next-line max-len
export const findBookingByEmailIdQuery = `SELECT * FROM ${eventBooking} WHERE email=? AND event_id=?`;

export const updateBookingQuery = `UPDATE ${eventBooking} SET status = ? WHERE booking_id = ?`;
export const deleteBookingQuery = `DELETE from ${eventBooking} WHERE email = ? AND event_id = ?`;
