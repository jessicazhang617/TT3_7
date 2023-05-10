import mysql from 'mysql';
import dotenv from 'dotenv'

dotenv.config();

export const db=mysql.createConnection(
    {
        host:'localhost', 
        user:'root', //Which has all read,write and execute rights
        password: process.env.DB_PASSWORD, 
        database:'expenseclaimsdata'
    }
);
