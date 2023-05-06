import express from 'express';
import { getEmployee } from '../controllers/SQL_auth.js';

const router=express.Router();

router.get('/:employeeId',getEmployee);

export default router;