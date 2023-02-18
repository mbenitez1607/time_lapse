import { Schema, model } from 'mongoose';
import CommentSchema from './Comment.js';
import moment from 'moment'

const TimelapseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please provide a name for your timelapse'],
    trim: true,
  },

  createdBy: {
    type: String,
    required: true
  },

  description: {
    type: String,
  },


  comments: [CommentSchema],
})

const Timelapse = model('timelapse', TimelapseSchema)

export default Timelapse
