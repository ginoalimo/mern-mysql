import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = createPool({
    // host: 'localhost',
    // port: 3306,
    // user: 'root',
    // password: 'faztpassword',
    // database: 'taskdb',
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    ssl: process.env.sll
});
