import { db } from './db_connection.js';

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});


