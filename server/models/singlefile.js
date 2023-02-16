import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },

    fileData:{
        type: Buffer,
        required:true
    }
}, {timestamps: true});

export default mongoose.model('SingleFile', singleFileSchema);