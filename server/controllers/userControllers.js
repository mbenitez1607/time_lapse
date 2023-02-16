import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const usersData = await User.find({})
    res.status(200).json({ data: usersData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const userData = await User.findOne({ _id: id }).populate(
      'following followers'
    )

    if (!userData) {
      return res.status(404).json({ msg: `No user with id : ${id}` })
    }

    res.status(200).json({ data: userData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json({ msg: 'user created', newUser })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({ id: id, data: updatedUser })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findOneAndDelete({ _id: id })

    if (!deletedUser) {
      return res.status(404).json({ msg: `No user with id: ${id}` })
    }

    res.status(200).json({ deletedUser })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// /api/users/:id/follow/:fid
export const followUser = async (req, res) => {
  try {
    // id is of current logged in user
    // fid (follow ID) of the user we want to follow
    const { id, fid } = req.params

    const followUser = await User.findOneAndUpdate(
      { _id: id },
      { $addToSet: { following: [fid] } },
      { new: true }
    )

    const returnFollow = await User.findOneAndUpdate(
      { _id: fid },
      { $addToSet: { followers: [id] } },
      { new: true }
    )

    if (followUser && returnFollow) {
      return res.status(200).json({
        msg: `now following user with id: ${fid}, and added to their followers list`,
      })
    }
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const unfollowUser = async (req, res) => {
  try {
    const { id, fid } = req.params

    const unfollowing = await User.findOneAndUpdate(
      { _id: id },
      { $pull: { following: fid } },
      { new: true }
    )

    const removeFollow = await User.findOneAndUpdate(
      { _id: fid },
      { $pull: { followers: id } },
      { new: true }
    )

    if (unfollowing && removeFollow) {
      return res.status(200).json({
        msg: `The user with id ${id} is no longer following user ${fid} and removed from their lists`,
      })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

