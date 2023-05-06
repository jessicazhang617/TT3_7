import express from 'express';
import { } from '../controllers/SQL_claims.js';

const router=express.Router(); 

router.get('/approved/:employeeID'); 
router.get('/pending/:employeeID');
router.get('/rejected/:employeeID');

router.post('/edit/'); 
router.post('add/')
router.delete('/delete/:claimID');


export default router; 


