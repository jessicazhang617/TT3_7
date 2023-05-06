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
    order by pec.status desc;`;
    
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

export function deleteClaim(req,res){
  let form=req.body; 
  let sql=` \
  update projectexpenseclaims
  set Delete_flag = 1
  where claimid = '${form.claimid}';`;
  
  db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
}

export function editClaim(req,res){
  let form=req.body; 
  let sql=` \
  update projectexpenseclaims \
  set ProjectID='${form.projectid}', \
  EmployeeID='${form.employeeid}', \
  CurrencyID=currencyid, \
  ExpenseDate=expensedate, \
  Amount=amount, \
  Purpose=purpose, \
  ChargeToDefaultDept=0, \
  AlternativeDeptCode=null, \
  Status=’Pending’, \
  LastEditedClaimDate='${LastEditedClaimDate,toLocaleString()}', \
  Delete_flag=0 \
  where claimid = '${form.claimid}';`;
  
  db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
}
