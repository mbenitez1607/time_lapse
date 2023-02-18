import express from 'express';
import {createProject, getAllProjects} from '../controllers/projectControllers.js';
const router = express.Router();


router.post('/', createProject);
router.get('/',getAllProjects);

export default router
