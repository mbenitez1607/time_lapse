import express from 'express';
import {createProject, getAllProjects, getSingleProject, updateProject, deleteProject} from '../controllers/projectControllers.js';
const router = express.Router();

router.post('/', createProject);
router.get('/',getAllProjects);
router.get('/:id', getSingleProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject, );


export default router



