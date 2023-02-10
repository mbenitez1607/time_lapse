const express = require('express')
const router = express.Router()

const {
  createComment,
  deleteComment,
} = require('../controllers/commentControllers')

router.route('/:id/comments').post(createComment)
router.route('/:id/comments/:cid').delete(deleteComment)

module.exports = router
