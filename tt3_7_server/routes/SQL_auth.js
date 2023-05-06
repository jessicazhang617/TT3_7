import express from 'express';
import { loginEmployee } from '../controllers/SQL_auth.js';

const router=express.Router();

router.post('/',loginEmployee);

export default router;