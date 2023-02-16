import  Comment from '../models/Comment.js'
import  Timelapse from '../models/Timelapse.js'



// /api/timelapse/:id/comments
export const createComment = async (req, res) => {
  try {
    const { id } = req.params
    const newComment = await Timelapse.findOneAndUpdate(
      { _id: id },
      { $addToSet: { comments: req.body } },
      { runValidators: true, new: true }
    )

    if (!newComment) {
      res
        .status(404)
        .json({ msg: 'Can not find the timelapse matching this ID' })
    }

    res.status(201).json({ msg: 'success', newComment })

  } catch (error) {
    res.status(500).json(error)
  }
}

// /api/timelapse/:id/comments/:cid
export const deleteComment = async (req, res) => {
  try {
    const { id, cid } = req.params
    const deletingComment = await Timelapse.findOneAndUpdate(
      { _id: id },
      { $pull: { comments: { commentId: cid } } },
      { runValidators: true, new: true }
    )

    if (!deletingComment) {
      res
        .status(404)
        .json({ msg: 'Can not find the timelapse matching this ID' })
    }

    res.status(201).json({ msg: 'comment deleted!', deletingComment })
  } catch (error) {
    res.status(500).json(error)
  }
}
