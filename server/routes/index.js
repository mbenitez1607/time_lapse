const router = require('express').Router()
const userRoutes = require('./users')

router.use('/users', userRoutes)

router.use((req, res) => res.send('Wrong route!'))

module.exports = router
