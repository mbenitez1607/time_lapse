import express from 'express';
import upload from '../helpers/filehelper.js';
import {singleFileUpload, getallSingleFiles, deleteFile, updateFile} from '../controllers/fileuploaderController.js';
const router = express.Router();


router.post('/singleFile/:id', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.put('/updateFile/:id', updateFile)
router.delete('/deleteFile/:id', deleteFile, );


export default router
