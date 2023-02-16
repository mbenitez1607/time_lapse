import express from 'express'
const router = express.Router()

import {
  getAllTimelapses,
  getSingleTimelapse,
  createTimelapse,
  updateTimelapse,
  deleteTimelapse,
} from '../controllers/timelapseControllers.js'

router.route('/').post(createTimelapse).get(getAllTimelapses)
router
  .route('/:id')
  .get(getSingleTimelapse)
  .put(updateTimelapse)
  .delete(deleteTimelapse)

export default router
