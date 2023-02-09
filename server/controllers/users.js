const User = require('../models/User')

const getAllUsers = async (req, res) => {
  res.send('get all users')
}
const getUser = async (req, res) => {
  res.send('get a single user')
}

const createUser = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({ user })
}

const updateUser = async (req, res) => {
  res.send('update user')
}
const deleteUser = async (req, res) => {
  res.send('delete user')
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
