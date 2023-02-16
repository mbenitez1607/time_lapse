
import express from 'express';
import upload from '../helpers/filehelper.js';
import {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles} from '../controllers/fileuploaderController.js';
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);


export default router