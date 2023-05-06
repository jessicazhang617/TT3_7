import { db } from './db_connection.js';

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});


export const loginEmployee=(req,res)=>{
    let form=req.body;
    let sql=`select * from employee where employeeid='${form.employeeid}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
