import express from 'express'
import {getBlogs} from "./blogController";

const router = express.Router();

router.get('/', getBlogs);

export default router;