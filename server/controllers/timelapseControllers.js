import Timelapse from '../models/Timelapse.js';
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
    const timelapseData = await Timelapse.find({})
    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getSingleTimelapse = async (req, res) => {
  try {
    const { id } = req.params
    const timelapseData = await Timelapse.findOne({ _id: id }).populate(
      'createdBy'
    )

    if (!timelapseData) {
      return res.status(404).json({ msg: `No user with id : ${id}` })
    }

    res.status(200).json({ data: timelapseData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const createTimelapse = async (req, res) => {

  try {
    //Stimulating a return of images from database
    const file1 = fss.readFileSync('./winningsslogo.png')
    const file2 = fss.readFileSync('./portfoliopic.png')
    const base64String1 = Buffer.from(file1)
    const base64String2 = Buffer.from(file2)

    //We instance the class Gif and give the proportions of width 500 and height 500
    const myGif = new Gif(200, 300)
    //We set 3 images that will be 3 frames
    await myGif.setFrames([
      {
        src: base64String1
      },
      {
        src: base64String2
      }
    ])

    //Render the image, it will return a Buffer or it will give an error if anything goes wrong
    const Render = await myGif.encode()

    //Writes the gif in this folder
    await fs.writeFile(join(__dirname, 'make-another-gif.gif'), Render)

    //const newTimelapse = await Timelapse.create(req.body)
    res.status(200).json({ msg: 'timelapse created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}



// likely to edit the description or name
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
