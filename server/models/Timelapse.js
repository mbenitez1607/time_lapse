const { Schema, model } = require('mongoose')
const CommentSchema = require('./Comment')
const moment = require('moment')

const TimelapseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide a name for your timelapse'],
    trim: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  description: {
    type: String,
  },
  // NOTE blank until we decide on the images format
  // 🌟 Represents the completed gif
  // gif: {
  //   type: ???
  // },

  comments: [CommentSchema],
})

const Timelapse = model('timelapse', TimelapseSchema)

module.exports = Timelapse
