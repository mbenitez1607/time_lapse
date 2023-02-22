import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema(
  {
    _id: {
      type: String,
      require: true,
    },

    username: {
      type: String,
      unique: true,
      required: [true, 'please provide a unique username'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Please enter a valid email address'],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    // 🌟 NOTE represents the final gif
    timelapse_gif: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Timelapse',
      },
    ],

    project: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
)


const User = model('user', userSchema)

export default User
