import Timelapse from '../models/Timelapse.js';
import Singlefile from '../models/Singlefile.js';
import Project from '../models/Project.js';
import User from '../models/User.js';
import { Gif } from 'make-a-gif';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs/promises';
import * as fss from 'fs';
import { Buffer } from 'node:buffer';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// likely for dashboard
export const getAllTimelapses = async (req, res) => {
  try {
    const timelapseData = await Timelapse.find({}).populate('createdBy')
    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getSingleTimelapse = async (req, res) => {.1

  try {
    const { id } = req.params
    const timelapseData = await Timelapse.findOne({ _id: id })
    if (!timelapseData) {
      return res.status(404).json({ msg: `No timelape with that id : ${id}` })
    }

    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const createTimelapse = async (req, res) => {
  try {
    //using a hardcoded user for testing
    const project = await Project.findOne({ _id: req.params.id })
    const projectImages = await Singlefile.find({ _id: { $in: project.images } });

    const fileNames = projectImages.map(projectImage => {
      return projectImage.fileName
    })

    const generateBuffer = fileNames.map(fileName => {
      const file = fss.readFileSync(`./uploads/${fileName}`)
      return {
        src: Buffer.from(file)
      }
    })

    //We instance the class Gif and give the proportions of width 500 and height 500

    const myGif = new Gif(500, 500)

    await myGif.setFrames(generateBuffer)


    //Render the image, it will return a Buffer or it will give an error if anything goes wrong
    const Render = await myGif.encode()

    //Writes the gif in this folder
    const gifName = project.name.replace(/\s+/g, '');
    await fs.writeFile(join(__dirname, `../gif/${gifName}.gif`), Render)

    const timelapseFile = new Timelapse({
      name: project.name,
      createdBy: req.userId,
      description: project.description,
      project: req.params.id
    });

    timelapseFile.save()

    await Project.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { timelapse: timelapseFile._id } },
      { new: true }
    );


    const generateBase64String = fss.readFileSync(`./gif/${gifName}.gif`, "base64")
    
    const data = {
      gifFile: generateBase64String,
    }

    return res.status(200).json({data:data, status:200})

  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export const updateTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const updatedTimelapse = await Timelapse.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    res.status(200).json({ id: id, data: updatedTimelapse })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTimelapse = await Timelapse.findOneAndDelete({ _id: id })

    if (!deletedTimelapse) {
      return res.status(404).json({ msg: `No user with id: ${id}` })
    }

    res.status(200).json({ deletedTimelapse })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
