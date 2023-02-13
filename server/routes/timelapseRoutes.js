const express = require('express')
const router = express.Router()

const {
  getAllTimelapses,
  getTimelapse,
  createTimelapse,
  updateTimelapse,
  deleteTimelapse,
} = require('../controllers/timelapseControllers')

router.route('/').post(createTimelapse).get(getAllTimelapses)
router
  .route('/:id')
  .get(getTimelapse)
  .put(updateTimelapse)
  .delete(deleteTimelapse)

module.exports = router
