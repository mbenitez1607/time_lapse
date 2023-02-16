import express from 'express'
const router = express.Router()

import  {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
} from '../controllers/userControllers.js'

router.route('/').post(createUser).get(getAllUsers)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)
router.route('/:id/follow/:fid').post(followUser).delete(unfollowUser)

export default router
