const router = require('express').Router()
const userRoutes = require('./users')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes)
router.use('/', commentRoutes)

router.use((req, res) => res.send('Wrong route!'))

module.exports = router
