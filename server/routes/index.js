import express from 'express'
var router = express.Router()
import userRoutes from './users.js'
import timelapseRoutes from './timelapseRoutes.js'
import commentRoutes from './commentRoutes.js'
import filesRoutes  from './file-upload-routes.js'

router.use('/users', userRoutes)
router.use('/timelapse', timelapseRoutes)
router.use('/comment', commentRoutes)
router.use('/files', filesRoutes)

router.use((req, res) => res.send('Wrong route!'))

export default router
