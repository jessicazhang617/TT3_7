import express from 'express';
import { getEmployee } from '../controllers/SQL_auth.js';

const router=express.Router();

router.post('/',loginEmployee);

export default router;