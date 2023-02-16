import express from 'express'
const router = express.Router()

import {
  createComment,
  deleteComment,
} from '../controllers/commentControllers.js'

router.route('/:id/comments').post(createComment)
router.route('/:id/comments/:cid').delete(deleteComment)

export default router
