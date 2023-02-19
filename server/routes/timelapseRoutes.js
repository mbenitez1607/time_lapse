import express from 'express'
const router = express.Router()

import {
  getAllTimelapses,
  getSingleTimelapse,
  createTimelapse,
  updateTimelapse,
  deleteTimelapse,
} from '../controllers/timelapseControllers.js'

router.route('/').get(getAllTimelapses)
router.route('/:id').post(createTimelapse)
router
  .route('/:id')
  .get(getSingleTimelapse)
  .put(updateTimelapse)
  .delete(deleteTimelapse)

export default router
