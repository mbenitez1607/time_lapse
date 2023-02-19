import express from 'express';
import {createProject, getAllProjects, getSingleProject} from '../controllers/projectControllers.js';
const router = express.Router();

router.post('/', createProject);
router.get('/',getAllProjects);
router.get('/:id', getSingleProject)

export default router
