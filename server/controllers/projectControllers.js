import Project from '../models/Project.js'
import User from '../models/User.js'
import SingleFile from '../models/Singlefile.js'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import fs from 'fs/promises'
import * as fss from 'fs'
import { Buffer } from 'node:buffer'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// import Timelapse from '../models/Timelapse.js';

export const createProject = async (req, res, next) => {
  try {
    const project = new Project({
      name: req.body.name,
      days: req.body.days,
      description: req.body.description,
      user: '63ef0f84c72473760d654405',
    })

    await project.save()

    await User.findOneAndUpdate(
      { _id: '63ef0f84c72473760d654405' },
      { $addToSet: { project: project._id } },
      { new: true }
    )

    return res.status(200).json({data:'project created!', status:200})
  } catch (error) {
    res.status(500).send(error.message)
  }
}
//-------------------------------------------------------------------------------------------------------------------
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params
    const updatedProject = await Project.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    res.status(200).json({ id: id, data: updatedProject })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProject = await Project.findOneAndDelete({ _id: id })

    if (!deletedProject) {
      return res.status(404).json({ msg: `No project with id: ${id}` })
    }

    res.status(200).json({ deletedProject })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}


//------------------------------------------------------------------------------------------------------------------

// get all projects for the user
export const getAllProjects = async (req, res, next) => {
  try {
    const filter = { user: '63ef0f84c72473760d654405' }
    const allUserProjects = await Project.find(filter)
    return res.status(200).json({data:allUserProjects, status:200})
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

export const getSingleProject = async (req, res, next) => {
  try {
    const filter = { _id: req.params.id }
    const singleProject = await Project.findById(filter)
    const findImages = await SingleFile.find({
      _id: { $in: singleProject.images },
    })

    const fileNames = findImages.map((singleFile) => {
      return {
        fileName: singleFile.fileName,
        id: singleFile._id,
      }
    })

    const generateBase64String = fileNames.map((imageFile) => {
      const file = fss.readFileSync(`./uploads/${imageFile.fileName}`, 'base64')
      return {
        id: imageFile.id,
        base64String: file,
      }
    })

    const data = {
      projectData: singleProject,
      singleProjectImages: generateBase64String,
    }

    return res.status(200).json({data:data, status:200})
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}
