const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

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
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //   },
    // ],
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
UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

const User = model('user', userSchema)

module.exports = User

// NOTE:
// Roughing in potential future additions to the models. Leaving commenetd out for now, until idea is fully fleshed out
