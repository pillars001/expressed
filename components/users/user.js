import express from 'express'
import {getUsers, getUser} from "./userController";

const router = express.Router();

// Get all users
router.get('/users', getUsers);
router.get('/user/:userId', getUser);

export default router;