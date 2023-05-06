import { db } from './db_connection.js';

export function getPending(req,res){
    const {employeeID}=req.params; 
    let sql=` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where e.employeeid = '${employeeID}' \
    and status = 'Pending' \
    and Delete_flag=0\
    order by pec.status desc;`;
    
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
    
  }

export function getApproved(req,res){
    const {employeeID}=req.params; 
    let sql=` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where e.employeeid = '${employeeID}' \
    and status = 'Approved' \
    and Delete_flag=0\
    order by pec.status desc;`;
    
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

export function getRejected(req,res){
    const {employeeID}=req.params; 
    let sql=` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where e.employeeid = '${employeeID}' \
    and status = 'Rejected' \
    and Delete_flag=0\
    order by pec.status desc;`;
    
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

//form.projectid,form
export function addClaim(req,res){
    let form=req.body; 
    const LastEditedClaimDate=Date.now();
    
    let sql=`select projectname from employeeprojects where projectid = '${form.projectid}' ; \
    insert into projectexpenseclaims (ProjectID, EmployeeID, CurrencyID, ExpenseDate, Amount, Purpose, ChargeToDefaultDept, AlternativeDeptCode, Status, LastEditedClaimDate, Delete_flag) values ( \
        '${form.projectid}', \
        '${form.employeeid}', \
        '${form.currencyid}', \
        '${form.expensedate}', \
        '${form.amount}', \
        '${form.purpose}', \
        0, \
        null, \
        'Pending', \
        '${LastEditedClaimDate.toLocaleString()}', \
        0 \
    );`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        
        res.send(result);
    });
}
