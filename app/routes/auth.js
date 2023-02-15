//File Name: auth.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023
import { Router } from 'express';
import { DisplayLoginPage, DisplayRegistrationPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../controllers/auth.js';

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage);

//Process Login Page
router.post('/login', ProcessLoginPage);


//Display Registration Page
router.get('/register', DisplayRegistrationPage);

//Process Registration Page
router.post('/register', ProcessRegisterPage);

//Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;