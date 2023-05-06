import express from 'express';
import {getApproved, getPending, getRejected, editClaim, deleteClaim } from '../controllers/SQL_claims.js';
const router=express.Router(); 

router.get('/approved/:employeeID', getApproved); 
router.get('/pending/:employeeID', getPending);
router.get('/rejected/:employeeID', getRejected);

router.post('/edit/', editClaim); 
router.post('add/')
router.post('/delete/', deleteClaim);


export default router; 


