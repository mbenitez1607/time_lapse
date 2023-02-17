import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
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
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: 8,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    // 🌟 NOTE represents the final gif
    timelapse_gif: [
      {
        type: Schema.Types.ObjectId,
        ref: 'timelapse',
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

// Bcrypt encryption
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

const User = model('user', userSchema)

export default User

// NOTES:
// Regarding timelapses -> Waiting to see how images get implemeted before finalizing
// Roughing in potential future additions to the models. Leaving commenetd out for now, until idea is fully fleshed out

// timelapses -> Referencing the COMPLETED GIF
// Images -> Referecning the images users are uploading
