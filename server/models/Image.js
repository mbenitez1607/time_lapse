const { Schema, model } = require('mongoose')
const moment = require('moment')

const ImageSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => moment(date).format('MMM DD, YYYY [at] hh:mm a'),
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
)

const Image = model('image', ImageSchema)

module.exports = Image
