
import SingleFile from '../models/Singlefile.js';
import Project from '../models/Project.js'
import { Buffer } from 'node:buffer';

export const singleFileUpload = async (req, res, next) => {
    try {
        const file = new SingleFile({
            fileName: req.file.filename,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),// 0.00
            project: '63f0f5807a4948a6d896b676'
        });

        await file.save();
        await Project.findOneAndUpdate(
            { _id: '63f0f5807a4948a6d896b676' },
            { $addToSet: { images: file._id } },
            { new: true }
        );

        res.status(201).send('File Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const deleteFile = async (req, res) => {
    try {
        const { id } = req.params
        const deletedFile = await SingleFile.findOneAndDelete({ _id: id })

        if (!deletedFile) {
            return res.status(404).json({ msg: `No file with id: ${id}` })
        }
        res.status(200).json({ deletedFile })

    } catch (error) {
        res.status(400).send(error.message);
    }
}


export const getallSingleFiles = async (req, res, next) => {
    try {
        const files = await SingleFile.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


export const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

