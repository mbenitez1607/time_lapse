import express from 'express'
var router = express.Router()
import userRoutes from './users.js'
import timelapseRoutes from './timelapseRoutes.js'
import commentRoutes from './commentRoutes.js'
import filesRoutes from './file-upload-routes.js'
import projectRoutes from './projectRoutes.js'
import middleware from '../middleware/index.js'



router.use('/users',middleware, userRoutes)
router.use('/timelapse',middleware, timelapseRoutes)
router.use('/timelapse',middleware, commentRoutes)
router.use('/files',middleware, filesRoutes)
router.use('/project',middleware, projectRoutes)

router.use((req, res) => res.send('Wrong route!'))

export default router
