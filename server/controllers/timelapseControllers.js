const Timelapse = require('../models/Timelapse')

// likely for dashboard
const getAllTimelapses = async (req, res) => {
  try {
    const timelapseData = await Timelapse.find({})
    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const timelapseData = await Timelapse.findOne({ _id: id }).populate(
      'createdBy'
    )

    if (!timelapseData) {
      return res.status(404).json({ msg: `No user with id : ${id}` })
    }

    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// 🌟 Until images is figured out, this will be very plain
// currently only acceots name, user and description
const createTimelapse = async (req, res) => {
  try {
    const newTimelapse = await Timelapse.create(req.body)
    res.status(201).json({ msg: 'timelapse created', newTimelapse })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// likely to edit the description or name
const updateTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const updatedTimelapse = await Timelapse.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    res.status(200).json({ id: id, data: updatedTimelapse })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTimelapse = await Timelapse.findOneAndDelete({ _id: id })

    if (!deletedTimelapse) {
      return res.status(404).json({ msg: `No user with id: ${id}` })
    }

    res.status(200).json({ deletedTimelapse })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTimelapses,
  getTimelapse,
  createTimelapse,
  updateTimelapse,
  deleteTimelapse,
}
