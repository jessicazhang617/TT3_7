import express from 'express';
import {getApproved, getPending, getRejected } from '../controllers/SQL_claims.js';
const router=express.Router(); 

router.get('/approved/:employeeID', getApproved); 
router.get('/pending/:employeeID', getPending);
router.get('/rejected/:employeeID', getRejected);

router.post('/edit/'); 
router.post('add/')
router.post('/delete/');


export default router; 


