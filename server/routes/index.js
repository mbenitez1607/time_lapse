const router = require('express').Router()
const userRoutes = require('./users')
const timelapseRoutes = require('./timelapseRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes)
router.use('/timelapse', timelapseRoutes)
router.use('/timelapse', commentRoutes)

router.use((req, res) => res.send('Wrong route!'))

module.exports = router
