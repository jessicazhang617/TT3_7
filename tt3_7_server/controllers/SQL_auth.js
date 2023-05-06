import { db } from './db_connection.js';

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});


export const getEmployee=(req,res)=>{
    const {employeeId}=req.params; 
    let sql=`select * from employee where employeeid='${employeeId}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
