import { Schema, Types } from 'mongoose'
import moment from 'moment'

const CommentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    text: {
      type: String,
      required: [true, 'Comments can not be empty'],
      minLength: 1,
      maxLength: 280,
    },

    username: {
      type: String,
      required: [true, 'Must be logged in to comment'],
    },

    createdAt: [
      {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format('MMM DD, YYYY [at] hh:mm a'),
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

export default CommentSchema
