import mysql from 'mysql';

export const db=mysql.createConnection(
    {
        host:'localhost', 
        user:'root', //Which has all read,write and execute rights
        password:"password", 
        database:'expenseclaimsdata'
    }
);
