import express from 'express';
import upload from '../helpers/filehelper.js';
import {singleFileUpload, getallSingleFiles, deleteFile} from '../controllers/fileuploaderController.js';
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.delete('/deleteFile/:id', deleteFile);


export default router
