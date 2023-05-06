import { db } from './db_connection.js';

function getPending(employeeID){
    const rows =  db.query(` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where employeeid = ${employeeID} \
    where status = 'Pending'
    order by pec.status desc;`);
    let data = [];
    if (rows){
      data = rows;
    }
    return {data};
  }

function getApproved(employeeID){
    const rows = db.query(` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where employeeid = ${employeeID} \
    where status = 'Approved'
    order by pec.status desc;`);
    let data = [];
    if (rows){
      data = rows;
    }
    return {data};
}

function getRejected(employeeID){
    const rows = db.query(` \
    select e.employeeid, ep.projectid, pec.claimid, c.currencyid, c.exchangerate, pec.status \
    from employee e \
    right join employeeprojects ep on e.employeeid = ep.employeeid \
    left join projectexpenseclaims pec on pec.employeeid = e.employeeid \
    join currency c on c.currencyid = pec.currencyid \
    where employeeid = ${employeeID} \
    where status = 'Rejected'
    order by pec.status desc;`);
    let data = [];
    if (rows){
      data = rows;
    }
    return {data};
}

module.exports = {getPending, getApproved, getRejected};