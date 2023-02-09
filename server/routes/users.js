const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
} = require('../controllers/users')

router.route('/').post(createUser).get(getAllUsers)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)
router.route('/:id/follow/:fid').post(followUser).delete(unfollowUser)

module.exports = router
